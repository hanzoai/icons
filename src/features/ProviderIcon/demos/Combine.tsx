import { ModelProvider, ProviderIcon } from '@hanzoai/icons';
import { Grid } from '@lobehub/ui';

export default () => {
  return (
    <Grid gap={16} rows={2} width={'100%'}>
      {Object.values(ModelProvider).map((provider) => (
        <ProviderIcon key={provider} provider={provider} size={28} type={'combine'} />
      ))}
    </Grid>
  );
};
