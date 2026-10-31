import { Partner } from '../types';

/**
 * Currently zero initial partners. No mock data.
 * Partners are loaded only when approved with Column L === 'TRUE' in the responses sheet.
 */
export const INITIAL_PARTNERS: Partner[] = [];

/**
 * Parses CSV exported from Google Sheets responses:
 * Col 0: Timestamp
 * Col 1: Email Address
 * Col 2: Business Name
 * Col 3: Business Location Link
 * Col 4: Facebook Page Link
 * Col 5: Google Link
 * Col 6: Contact Person
 * Col 7: Contact Number
 * Col 8: Type of Establishment
 * Col 9: Are You Interested in Joining Kain Tayo?
 * Col 10: Additional Questions or Comments
 * Col 11 (Column L): Approved flag (Must be 'TRUE' to be displayed publicly)
 */
export function parsePartnersCsv(csvContent: string): Partner[] {
  if (!csvContent || typeof csvContent !== 'string') return [];

  const lines = csvContent.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  if (lines.length <= 1) return []; // Only header or empty

  const partners: Partner[] = [];

  // Parse lines starting after header
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    // CSV split handling quotes
    const cols = splitCsvLine(line);
    if (!cols || cols.length < 3) continue;

    const businessName = (cols[2] || '').trim();
    if (!businessName) continue;

    // Check column L (index 11) for approval
    const columnL = (cols[11] || '').trim().toUpperCase();
    const isApproved = columnL === 'TRUE';

    // Only include if approved in Column L
    if (!isApproved) continue;

    partners.push({
      id: `partner-${i}-${Date.now()}`,
      timestamp: cols[0]?.trim(),
      email: cols[1]?.trim(),
      businessName,
      locationLink: cols[3]?.trim(),
      facebookPage: cols[4]?.trim(),
      googleMapsLink: cols[5]?.trim(),
      contactPerson: cols[6]?.trim() || 'Owner / Cook',
      contactNumber: cols[7]?.trim() || '',
      typeOfEstablishment: cols[8]?.trim() || 'Carinderia / Eatery',
      notes: cols[10]?.trim() || '',
      isApproved: true
    });
  }

  return partners;
}

/**
 * Robust CSV line splitter handling quoted strings with commas
 */
function splitCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

/**
 * Filter approved partners by search query
 */
export function filterApprovedPartners(partners: Partner[], query: string): Partner[] {
  const q = query.trim().toLowerCase();
  if (!q) return partners;

  return partners.filter((p) => {
    return (
      p.businessName.toLowerCase().includes(q) ||
      p.contactPerson.toLowerCase().includes(q) ||
      (p.typeOfEstablishment && p.typeOfEstablishment.toLowerCase().includes(q)) ||
      (p.locationLink && p.locationLink.toLowerCase().includes(q))
    );
  });
}
