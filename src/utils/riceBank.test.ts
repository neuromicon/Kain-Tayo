import test from 'node:test';
import assert from 'node:assert/strict';
import { parsePartnersCsv, filterApprovedPartners } from './riceBank';

const CSV_HEADER = 'Timestamp,Email Address,Business Name,Business Location Link ,Facebook Page Link,Google Link,Contact Person,Contact Number,Type of Establishment, Are You Interested in Joining Kain Tayo?,Additional Questions or Comments,Approved';

test('parsePartnersCsv returns empty array when only header exists', () => {
  const result = parsePartnersCsv(CSV_HEADER);
  assert.equal(result.length, 0);
});

test('parsePartnersCsv ignores unapproved rows where column L is not TRUE', () => {
  const csv = `${CSV_HEADER}\n2026-10-31,test@example.com,Test Eatery,Dumaguete,fb.com/test,maps.google.com,Nanay Mary,0917-1234,Carinderia,Yes,Ready,FALSE`;
  const result = parsePartnersCsv(csv);
  assert.equal(result.length, 0);
});

test('parsePartnersCsv returns partner when column L has value TRUE', () => {
  const csv = `${CSV_HEADER}\n2026-10-31,test@example.com,Kainan sa Baybay,Rizal Blvd,fb.com/test,maps.google.com,Kuya Boy,0917-1234,Carinderia,Yes,Open daily,TRUE`;
  const result = parsePartnersCsv(csv);
  assert.equal(result.length, 1);
  assert.equal(result[0].businessName, 'Kainan sa Baybay');
  assert.equal(result[0].contactPerson, 'Kuya Boy');
  assert.equal(result[0].isApproved, true);
});

test('filterApprovedPartners searches correctly', () => {
  const partners = [
    {
      id: '1',
      businessName: 'NORSU Hub',
      contactPerson: 'Ate Joy',
      contactNumber: '0917',
      isApproved: true
    },
    {
      id: '2',
      businessName: 'Silliman Stop',
      contactPerson: 'Kuya Ronald',
      contactNumber: '0928',
      isApproved: true
    }
  ];

  const matched = filterApprovedPartners(partners, 'NORSU');
  assert.equal(matched.length, 1);
  assert.equal(matched[0].businessName, 'NORSU Hub');

  const matchedByPerson = filterApprovedPartners(partners, 'Ronald');
  assert.equal(matchedByPerson.length, 1);
  assert.equal(matchedByPerson[0].businessName, 'Silliman Stop');
});
