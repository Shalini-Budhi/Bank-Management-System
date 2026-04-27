import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function CustomCard(props) {
   const backgrounds = [
      "https://imgs.search.brave.com/SieSagWO_pgsbGvoH8TcX6vS95tKLLCxu2IvjU_miNM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODQ2/MDkwNjI2L3Bob3Rv/L2N1cGVydGluby1j/YS1hcHBsZS1jZW8t/dGltLWNvb2stc3Bl/YWtzLWR1cmluZy1h/bi1hcHBsZS1zcGVj/aWFsLWV2ZW50LWF0/LXRoZS1zdGV2ZS1q/b2JzLXRoZWF0cmUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXJKZjlkQ09sU0M1/bVViaTNGcmNyWDVf/Q0hjdFpzU3NFdWFr/dEp3cHFzREk9",
      "https://imgs.search.brave.com/GMGznxiirKHrCokjYSwVxy04SeuGSdjDWNpkXYMATYM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zdGV2/ZS1qb2JzLXdheC1z/dGF0dWVzLW11c2V1/bS00NzE2Mzk5NS5q/cGc",
      "https://imgs.search.brave.com/35I3ral-J22ELItbT9f7sqFrjmXBcOhIKWrXnqhNILU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5oc3dzdGF0aWMu/Y29tL2V5SmlkV05y/WlhRaU9pSmpiMjUw/Wlc1MExtaHpkM04w/WVhScFl5NWpiMjBp/TENKclpYa2lPaUpu/YVdaY0wzTjBaWFps/TFdwdlluTXRNVGsz/TnkweExtcHdaeUlz/SW1Wa2FYUnpJanA3/SW5KbGMybDZaU0k2/ZXlKM2FXUjBhQ0k2/TlRBeWZYMTk",
    ];


  const cardStyle = (bg) => ({
    maxWidth: 345,
    height: 200,
    color: "#fff",
    position: "relative",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
    overflow: "hidden",
  });

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
  };

  return (
    <div>
      {/* CAROUSEL */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          {/* CARD 1 */}
          <div className="carousel-item active">
            <Card sx={cardStyle(backgrounds[0])}>
              <div style={overlayStyle}></div>
              <CardContent sx={contentStyle}>
                <Typography variant="h5">Card 1</Typography>
                <Typography>
                  {props.data || "no data available"}
                </Typography>
              </CardContent>
            </Card>
          </div>

          {/* CARD 2 */}
          <div className="carousel-item">
            <Card sx={cardStyle(backgrounds[1])}>
              <div style={overlayStyle}></div>
              <CardContent sx={contentStyle}>
                <Typography variant="h5">Card 2</Typography>
                <Typography>
                  {props.data || "no data available"}
                </Typography>
              </CardContent>
            </Card>
          </div>

          {/* CARD 3 */}
          <div className="carousel-item">
            <Card sx={cardStyle(backgrounds[2])}>
              <div style={overlayStyle}></div>
              <CardContent sx={contentStyle}>
                <Typography variant="h5">Card 3</Typography>
                <Typography>
                  {props.data || "no data available"}
                </Typography>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>

      {/* CONTROLS */}
      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          Prev
        </button>

        <button
          className="btn btn-primary"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          Next
        </button>
      </div>
    </div>
  );
}