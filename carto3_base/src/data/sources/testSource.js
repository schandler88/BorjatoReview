import { MAP_TYPES } from '@deck.gl/carto';

const TEST_SOURCE_ID = 'testSource';

const source = {
  id: TEST_SOURCE_ID,
  type: MAP_TYPES.TABLE,
  connection: 'se-bigquery',
  data: 'cartodb-gcp-solutions-eng-team.steph_data.CSH_owned_ambulatory_care_centers',
};

export default source;
