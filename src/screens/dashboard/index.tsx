import React from "react";
import {Text} from "react-native"
import { 
    Container,  
    Header,
    UserWraper,
    UserInfo,
    Photo,
    User,
    UserGrettings,
    UserName
} from "./styles"; 

export function Dashboard(){
    return(
        <Container>      
            <Header>
                <UserWraper>
                    <UserInfo>
                        <Photo 
                            source={{uri: 'https://github.com/LucasMuginoski.png'}}
                        />
                        <User/>
                            <UserGrettings>Olá, </UserGrettings>
                            <UserName>Lucas!</UserName>
                    </UserInfo>
                </UserWraper>
            </Header>
        </Container>
    );
}
