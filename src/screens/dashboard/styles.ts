// usar o /native para importar elementos do react native
import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import { Feather } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";


export const Container = styled.View`
    flex: 1;
    background-color: ${ ({theme})=> theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${ ({ theme })=> theme.colors.primary};
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const UserWraper = styled.View`
    width: 100%;
    padding: 0 ${RFValue(24)}px;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGrettings = styled.Text`
    color: ${ ({theme})=> theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${ ({theme})=> theme.fonts.regular};
`;

export const UserName = styled.Text`
        color: ${ ({theme})=> theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${ ({theme})=> theme.fonts.bold};
`;

export const IconPower = styled(Feather)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;

//ScrollView por ser apenas 3 cards 
export const HighlightCards = styled.ScrollView.attrs({
    //usar attrs para acessar as propr. da scrollview pelo styled components
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle:{paddingHorizontal: 24}
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;