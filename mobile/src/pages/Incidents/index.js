import React,{useState,useEffect} from 'react';
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';
import {View,FlatList,Image,Text,TouchableOpacity} from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './style';

export default function Incidents(){
    const navigation = useNavigation();
    const [incidents,setIncidents] =useState([]);
    
    function navigateToDetail(){
        navigation.navigate('Detail');
    }

    async function loadIncidents(){
        const response = await api.get('incidents');
        setIncidents(response.data);
    }
    useEffect(()=>{
        loadIncidents();
    },[]);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de<Text style={styles.headerTextBold}> 0 casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                data={[1,2,3,4,5,6]}
                style={styles.IncidentList}
                keyExtractor={incident=>String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={()=>(
                    <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>APAD</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>Cachorro que não para de latir.</Text>
                    
                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>R$ 500,00</Text>

                    <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={navigateToDetail}
                    >
                    <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                    <Feather name="arrow-right" size={16} color="#E02041"/>
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
    );
}