import { gql } from "@apollo/client";

export const CONGRESS_RESULT = gql`
  query CongressResults($municipality_id: String) {
    congressResults(municipality_id: $municipality_id) {
      total_votes
      count_record
      positions_by_party {
        politic_party_id
        marks
        positions
        positions_extra
        quotient
      }
      candidate_congress {
        politic_party_id
        politic_party_code
        politic_party_image
        candidate_id
        number_box
        candidate_name
        candidate_image
        marks
      }
    }
  }
`;
