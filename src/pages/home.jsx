import { Avatar } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function home() {
  const navigate = useNavigate();
  const readmore_one = () =>{
    navigate("/experience")
  }
  const readmore_two = () =>{
    navigate("/gallery")
  }

  return (
    <>
      <div className="h-screen item-center">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          size="xxl"
          className="mt-10 mb-5"
        />
        <Typography variant="h2" className="mb-5">
          Supakitt Inma
        </Typography>
        <Typography variant="lead" className="">
          Welcome to My Portfolio on Website , My name's Supakit Inma. I am
          studying at Dhurakij Pundit University, 3rd year, majoring in Computer
          Engineering.I am looking for an internship position in
        </Typography>
        <div className="mb-5">
          <li>Backend Development</li>
          <li>IoT Engineering</li>
          <li>Network Engineering</li>
          <li>System Engineering</li>
        </div>
        <hr></hr>
        <div className="flex flex-row">
          <Card className="mt-6 w-98 mr-2">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 mt">
                My Experience
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button onClick={readmore_one}>Read More</Button>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-98">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                My Gallery
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button onClick={readmore_two}>Read More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
