import { Box, Button, TextField, Typography } from "@mui/material";

function DeleteAccount() {
  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Do you want to delete your account?
      </Typography>
      
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        sx={{ mb: 2 }}
      />
      
      <Button
        variant="contained"
        color="error"
        fullWidth
        sx={{ mt: 2 }}
      >
        Delete Account
      </Button>
    </Box>
  );
}

export default DeleteAccount;
