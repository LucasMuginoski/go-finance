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
                <HighlightCard
                    type="up" 
                    title="Entradas" 
                    amount="R$ 17.400,00" 
                    lastTransaction="Última entrada dia 13 de abril" 
                />
                <HighlightCard 
                    type="down"
                    title="Saídas" 
                    amount="R$ 1.259,00" 
                    lastTransaction="Última saída dia 03 de abril"
                />
                <HighlightCard 
                    type="total"
                    title="Total" 
                    amount="R$ 16.141,00" 
                    lastTransaction="01 à 16 de abril"
                />
            </HighlightCards>

        </Container>
    );
}
