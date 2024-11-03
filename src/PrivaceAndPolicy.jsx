import { Typography,Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function PrivaceAndPolicy() {

    let navigate= useNavigate()
  return (
    // Main Container

    <Box>
      <Box>
        <Box
          sx={{
            width: "100%",
            height: "52px",
            backgroundColor: "#000",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "90%",
              mx: "auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                backgroundColor: "red",
                color: "#fff",
                padding: "6px 16px",
                "&:hover": {
                  backgroundColor: "#d32f2f", 
                },
              }}
              onClick={() => navigate("/delete-account")}
            >
              Delete Account
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* Body */}
        <Box
          sx={{
            width: "90%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <Typography>
            <h1 style={{ textAlign: "center", color: "#f1e1c7" }}>
              Privacy and Policy forTrading Soiety
            </h1>
            At Trading Society, we handle personal data with the utmost care and
            adhere to all relevant data protection laws, including the General
            Data Protection Regulation (GDPR). This policy explains the purpose
            of collecting personal information and the measures we take to
            protect your privacy.
            <h3 style={{ textAlign: "left", color: "#fff" }}>
              {" "}
              Purpose Specification
            </h3>
            We will specify our purposes before collecting and processing your
            data. Trading Society gathers personal information solely for
            legitimate business reasons, such as improving services, processing
            transactions, and communicating effectively.
            <h3 style={{ textAlign: "left", color: "#fff" }}>
              {" "}
              Data Collection
            </h3>
            We limit data collection to only the information necessary for our
            purposes. Collected data may include: Identification Data: Name,
            username, and display/nickname. Contact Data: Email address, phone
            number, and physical address. Financial Data: Payment details and
            invoice address. Technical Data: IP address and device
            identification. Company Data: Company name and VAT number. Consent
            We will request explicit consent to process personal data whenever
            it is required, and you may withdraw this consent at any time.
            <h3 style={{ textAlign: "left", color: "#fff" }}> Security</h3>
            We implement appropriate security measures to protect your data.
            This includes: Encrypted SSL connections for all transactions and
            communications. Secure storage of data on our proprietary servers.
            Restricted access to personal information, requiring usernames,
            passwords, and secure login tokens. Regular data backups and audits
            to ensure data integrity and prevent unauthorized access. Rights of
            Access, Correction, and Deletion Trading Society respects your
            rights to access, correct, and delete your personal information. You
            may contact us anytime to exercise these rights, and we will respond
            promptly to all requests.
            <h3 style={{ textAlign: "left", color: "#fff" }}>
              {" "}
              Data Retention and Third-Party Processing
            </h3>
            Trading Society will retain data based on legal requirements and
            business needs. When sharing data with third-party service
            providers, we ensure they meet our privacy standards. Trading
            Society collaborates with: Delivery Services for order fulfillment.
            Marketing Partners for advertising and promotional purposes (e.g.,
            Google). Technical Providers for analytics and performance
            monitoring. Marketing Communications We may send you marketing
            messages if you’ve opted in. You can unsubscribe at any time using
            the link provided in our emails.
            <h3 style={{ textAlign: "left", color: "#fff" }}>
              {" "}
              Statistics and Profiling
            </h3>
            To improve our services, Trading Society may analyze usage
            statistics. We only access personal data when necessary and keep
            individual data private.
            <h3 style={{ textAlign: "left", color: "#fff" }}> Cookies</h3>
            Our website uses cookies to enhance the user experience and store
            preferences. By using the website, you consent to cookies, which you
            can disable in your browser settings.
            <h3 style={{ textAlign: "left", color: "#fff" }}>
              {" "}
              Security Measures
            </h3>
            We log all requests for personal data and maintain physical and
            digital security controls to prevent unauthorized access. For any
            inquiries or to exercise your rights regarding personal data,
            contact Trading Society's Data Protection Officer.
          </Typography>

          {/* Breaker */}
          <Box
            sx={{
              width: "100%",
              height: "6x",
              display: "flex",
              justifyContent: "space-between",
              gap: "2px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "2px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "#b08c20",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                height: "2px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "#b08c20",
              }}
            ></Box>
          </Box>
          {/*End Of Breaker */}

          {/* End Of Body */}
        </Box>
      </Box>
    </Box>
  );
}

export default PrivaceAndPolicy;
