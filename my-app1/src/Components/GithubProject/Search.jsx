import { Box, Heading, Input, Button, Flex } from "@chakra-ui/react";
import { useContext, useState } from "react";
import myContext from "../Context/myContext";
import axios from "axios";

function Search() {
  const [username, setUsername] = useState("");

  const { addData } = useContext(myContext)

  const getUserData = ()=>{
    axios.get(`https://api.github.com/users/${username}`)
    .then((res)=>{
        addData(res.data)
        console.log(res.data)
    }).catch(()=>{
        console.log("error while getting github user");
    })
  }
  return (
    <Box>
      <Box mb="15px">
        <Heading size="lg" color="green">
          GITHUB PROJECT
        </Heading>
      </Box>

      <Flex>
        <Input
          placeholder="Enter Github User Id"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Button
          variant="outline"
          color="green"
          p="10px 70px"
          onClick={getUserData}
        >
          Search
        </Button>
      </Flex>
    </Box>
  );
}

export default Search;