import React from "react";
import { HighlightCard } from "../../components/HighlightCard";

import { 
    Container,  
    Header,
    UserWraper,
    UserInfo,
    Photo,
    User,
    UserGrettings,
    UserName,
    IconPower,
    HighlightCards
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
                    <IconPower name="power"/>
                </UserWraper>
                
            </Header>
            <HighlightCards>
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </HighlightCards>

        </Container>
    );
}
