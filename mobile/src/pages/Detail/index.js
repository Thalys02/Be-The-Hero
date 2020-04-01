import React from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavegation, useNavigation} from '@react-navigation/native';
import {View,Image,Text, TouchableOpacity,Linking} from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './style';

export default function Detail(){
    const navegation = useNavigation();
    const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cachorro que não para de Latir" com valor de "R$ 500,00"!';
    
    function navigationBack(){
        navegation.goBack();
    };

    function sendEmail(){
        MailComposer.composeAsync({
            subject:'Heroi do caso:Cachorro que não para de Latir',
            recipients:['thalys.melicio02@gmail.com'],
            body:message,       
        })
    };

    function sendWhatsapp(){
         Linking.openURL(`whatsapp://send?phone=558587938455&text=${message}`);
    };

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#e8041"/>
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty,{marginTop:0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cachorro que não para de latir.</Text>
                
                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 500,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroTitle}>Entre em contato:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}> 
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}> 
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}