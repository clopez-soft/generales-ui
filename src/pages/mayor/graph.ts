import { gql } from "@apollo/client";

export const MAYOR_RESULT = gql`
  query MayorResults($municipality_id: String!) {
    mayorResults(municipality_id: $municipality_id) {
      count_record
      total_votes
      positions {
        position
        politic_party_id
        politic_party_code
        politic_party_image
      }
      marks {
        politic_party_id
        politic_party_code
        politic_party_image
        totalmark
      }
    }
  }
`;
