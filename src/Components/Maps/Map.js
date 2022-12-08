import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from '@chakra-ui/react';

import { FaCar, FaLocationArrow, /* FaTimes, */ FaWalking, FaWindowRestore } from 'react-icons/fa';

import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  MarkerClusterer,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';
import React, { useRef, useState } from 'react';
import markers from './markers';



function Map({inCard, coord}) {
  
  //Google Maps API key activation
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDa96QN-KoPRMzs1MkT7w8DlC4lJfmXOgY',
    libraries: ['places'],  
  })
    console.log(coord)
  const [iconSize, setIconSize] = useState({width: 32, height: 32});

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  
  //Configuration for the location window
  const [displayBox, setDisplayBox] = useState('none');
  const [Icons, setIcons] = useState(true);

  //Configuration for the current position input window (Origin)
  const center = { lat: latitude, lng: longitude };
  const [origin, setOrigin] = useState(`${center.lat},${center.lng}`);
  
  //Configuration for the destination input window (Destination)
  const [destination, setDestination] = useState('');
  
  //Current position
  React.useEffect(() => {
    if (inCard){
      const lat=Number(coord.lat)
      const lng=Number(coord.lng)
      setLatitude(lat);
      setLongitude(lng);
      setOrigin(`${lat},${lng}`);
      return 
    }
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setOrigin(`${position.coords.latitude},${position.coords.longitude}`);
      setDestination(`${coord.lat},${coord.lng}`);
  })
  }, [inCard])
  
  React.useEffect(() => {
    calculateRoute()
  },[destination])

  //Configuration for the map
  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState({});
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();

  if (!isLoaded) {
    return <SkeletonText />
  }
  
  //A function (calculateRoute) that calculates the route(from and to a place)
  async function calculateRoute() {
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    
    //results = travel mode WALKING
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.WALKING,  
    })
    
    //result = travel mode DRIVING
    const result = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING, 
    })
    
    // Here we calculate the route depending on what icon (FaWalking or FaCar) is displayed in the direction window 
    if (Icons === true) {
      setDirectionsResponse(results);
      setDistance(results.routes[0].legs[0].distance.text);
      setDuration(results.routes[0].legs[0].duration.text);
      
    // Here we calculate the route depending on what icon (FaWalking or FaCar) is displayed in the direction window
    } else if (Icons === false) {
      setDirectionsResponse(result);
      setDistance(result.routes[0].legs[0].distance.text);
      setDuration(result.routes[0].legs[0].duration.text);
    }
  }


  //A function that cleans up the search window and the calculated route
  /*
  async function clearRoute() {
    
    setDirectionsResponse({});
    setDistance('');
    setDuration('');
    // originRef.current.value = ''
    setOrigin('');
    // destinationRef.current.value = ''
    setDestination('');
  }
  */
  
  //Resizing icons on the map depending on zoom level
  function handleZoomChanged(){
    if (this.getZoom() > 14) {
    setIconSize({
      width: 32, height: 32,
    })
  } else if (this.getZoom() <= 11) {
    setIconSize({
      width: 0, height: 0,
    })
    
  } else {
    setIconSize({
      width: 20, height: 20,
    })
  }
  
  };

  

  return (
    //Configuration for the map properties
    <Flex
    
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='100vh'
      w='100vw'
    > 
      <Box position='absolute' left={0} top={0} h='100%' w='100%'>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          //Zoom configuration
          onZoomChanged={handleZoomChanged} 
            
          //Map size + mapID and other configuration
          mapContainerStyle={inCard?{width: '316px', height: '176px'}:{ width: '100%', height: '100%' }}
          options={{
            mapId: 'f4ce3575160e107d',
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          
          <MarkerF 
              //Marker for current position
              position={center}  onClick={(e) => {
                setOrigin(`${e.latLng.lat()},${e.latLng.lng()}`);  
          }}/>
  
          
            {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
          
          
          <IconButton
            //Button in the top left corner
            aria-label='center back'
            icon={<FaWindowRestore />}
            isRound
            color = 'red'
            background = 'transparent'
            _focus = {displayBox === 'none' ? {}:{
              boxShadow:
                '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
              background: 'lightgray'
              }}
            
            onClick={() => {
                //Onclick effect
                if (displayBox === 'none'){
                  setDisplayBox('block');
                  
                } else if (displayBox === 'block'){
                  setDisplayBox('none');
                }
          }}
          />
        </GoogleMap>
      </Box>

      <Box 
        //This is the main box for the destination calculation window
        p={4}
        borderRadius='lg'
        m={10}
        bgColor='white'
        shadow='base'
        minW='container'
        zIndex='1'
        display = {displayBox}
      >
        <HStack  justifyContent='space-between'>
          <Box >
          <Box>
            <Autocomplete>
              <Input
                //Origin box/window
                mb = '10px'
                minW = '210px'
                value = {origin}
                type='text' 
                placeholder='Origin' 
                ref={originRef} 
                onChange = {(e)=> {
                  setOrigin(e.target.value)
              }}/>
            </Autocomplete>
          </Box>
          
          <Box >
            <Autocomplete>
              <Input
                //Destination box/window
                minW = '210px'
                value = {destination} 
                type='text'
                placeholder='Destination'
                ref={destinationRef}
                onChange = {(e)=> {
                  setDestination(e.target.value)
                }}
              />
            </Autocomplete>
          </Box>
          </Box>
          <ButtonGroup>
            <Button colorScheme='green' type='submit' onClick={calculateRoute}>
              Calculate Route
            </Button>
            
          </ButtonGroup>
        </HStack>
        
        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distance: {distance} </Text>
          
          <IconButton
            aria-label='center back'
            icon={<FaLocationArrow />}
            isRound
            
            onClick={() => {
              map.panTo(center)
              map.setZoom(15)
            }}
          />
        </HStack>
        
        <HStack spacing={4} mt={4} justifyContent='space-between'>
        <Text>Duration: {duration} </Text>
          <IconButton
            aria-label='center back'
            
            icon = {Icons ? <FaWalking /> : <FaCar />}
            isRound
            onClick={() => {
              
              if (Icons === false) {
                setIcons(true);
                
              } else if (Icons === true) {
                setIcons(false);
                
              }
              
          }}
          />
        </HStack>
      </Box>
    </Flex>
  )
}

export default Map;
