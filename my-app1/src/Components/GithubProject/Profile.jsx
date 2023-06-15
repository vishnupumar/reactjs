import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import myContext from "../Context/myContext";

function Profile(props) {
  const { data } = useContext(myContext);


  return (
    <Box p="10px" textAlign="center" boxShadow="dark-lg">
      <img
        src={data.avatar_url || "https://media.istockphoto.com/id/1016761216/photo/portrait-concept.jpg?s=612x612&w=0&k=20&c=JsGhLiCeBZs7NeUY_3wjDlLfVkgDJcD9UCXeWobe7Ak="}
        height={210}/>
      <Heading size="lg">{data.name || "No Name"}</Heading>
      <p>
        {data.bio || "Laborum do sunt est nulla consequat. Aliqua quis ullamco culpa Lorem eu ipsum laborum laboris consequat ad nostrud esse eiusmod deserunt. "}
      </p>
      <a href={data.html_url} target="_blank">
        <Button color="green">Profile</Button>
      </a>
    </Box>
  );
}

export default Profile;