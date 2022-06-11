import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export function DateFilter() {
  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
        id="date"
        label="Busca por Data"
        type="date"
        defaultValue=""
        sx={{ width: 150 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
  );
}
