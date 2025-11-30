import { gql } from "@apollo/client";

export const PRESIDENT_RESULT = gql`
  query PresidentResults {
    presidentResults {
      count_record
      total_votes
      president_votes {
        politic_party_id
        politic_party_code
        politic_party_image
        political_alliance_id
        political_alliance_code
        political_alliance_image
        candidate_id
        number_box
        candidate_name
        candidate_image
        candidate_flag
        votes
      }
    }
  }
`;
