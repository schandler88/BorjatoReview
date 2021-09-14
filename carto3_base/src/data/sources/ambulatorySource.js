import { MAP_TYPES } from '@deck.gl/carto';

const AMBULATORY_SOURCE_ID = 'ambulatorySource';

const source = {
  id: AMBULATORY_SOURCE_ID,
  type: MAP_TYPES.QUERY,
  connection: 'se-bigquery',
  data: 'SELECT * FROM `cartodb-gcp-solutions-eng-team.steph_data.CSH_owned_ambulatory_care_centers`',
};

export default source;
