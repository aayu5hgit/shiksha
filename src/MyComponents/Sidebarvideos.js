import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
import {   BiMenuAltLeft} from 'react-icons/bi';

const Sidebarvideo = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // <>
    // <Drawer>
    //     <DrawerOverlay>
    //         <DrawerContent>
    //             <div>
    //                 menu
    //             </div>
    //         </DrawerContent>
    //     </DrawerOverlay>
    // </Drawer>
    // </>

    <>
    <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="blue"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
        
      >
        <BiMenuAltLeft/> 
    </Button>

    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
    {/* <Drawer  placement="left" > */}
    <DrawerOverlay>
             <DrawerContent>
                 <DrawerCloseButton />
                 <DrawerHeader> Lessons</DrawerHeader>
                 <DrawerBody>
                    <VStack alignItems={'flex-start'}>
                    <Button onClick={onClose} variant={'ghost'} colorScheme={'blue'}>
                        <Link to={'/basic'}>Basic</Link>
                    </Button>

                    <Button onClick={onClose} variant={'ghost'} colorScheme={'blue'}>
                        <Link to={'/inventory'}>Tracking Inventory</Link>
                    </Button>

                    <Button onClick={onClose} variant={'ghost'} colorScheme={'blue'}>
                        <Link to={'/quiz1'}>Quiz 1</Link>
                    </Button>

                    <Button onClick={onClose} variant={'ghost'} colorScheme={'blue'}>
                        <Link to={'/video'}>Lectures</Link>
                    </Button>

                    <Button onClick={onClose} variant={'ghost'} colorScheme={'blue'}>
                        <Link to={'/'}>Bonds</Link>
                    </Button>

                    <Button onClick={onClose} variant={'ghost'} colorScheme={'blue'}>
                        <Link to={'/'}>Quiz 2</Link>
                    </Button>

                    <Button onClick={onClose} variant={'ghost'} colorScheme={'blue'}>
                        <Link to={'/'}>Case Study</Link>
                    </Button>

                    <Button variant={'ghost'} colorScheme={'blue'}>
                        <Link to={'/'}>Projects</Link>
                    </Button>
                    </VStack>

               
                    

                    
                 </DrawerBody>
             </DrawerContent>
         </DrawerOverlay>
    </Drawer>
    </>


    // <div>Sidebar</div>

  );
}

export default Sidebarvideo

