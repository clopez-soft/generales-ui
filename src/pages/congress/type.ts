export type CandidateCongress = {
  politic_party_id: string;
  politic_party_code: string;
  politic_party_image: string;
  candidate_id: string;
  number_box: number;
  candidate_name: string;
  candidate_image: string;
  marks: number;
};

export type QuotientParty = {
  politic_party_id: string;
  politic_party_code: string;
  politic_party_image: string;
  marks: number;
  positions: number;
  quotient: number;
  positions_extra: number;
};
