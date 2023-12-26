import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home(){
    const [participants, setParticipants] = useState<string[]>(['teste']);
    const [inputParticipant, setInputParticipant] = useState<string>('');

    function handleParticipantAdd(name: string){
        if(participants.includes(name)) return Alert.alert(
            'Participante já existe', 
            'Esse nome já está na lista de participantes.', 
            [
                {
                    text: 'Ok'
                }
            ]
        );
        
        if(name.length == 0) return Alert.alert(
            'Digite um nome',
            '', 
            [
                {
                    text: 'Ok'
                }
            ]
        );

        setParticipants((prev) => [...prev, name]);
        setInputParticipant('');
    }

    function handleParticipantRemove(name: string){
        let newArray = participants.filter( participant => participant !== name)

        setParticipants(newArray);
    }

    function getDate(){
        let date = new Date;

        const monthInText = [
            "Janeiro", "Fevereiro", "Março",
            "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro",
            "Outubro", "Novembro", "Dezembro"
          ];
        
          const day = date.getDate();
          const month = monthInText[date.getMonth()];
          const year = date.getFullYear();
        
          return `${day} de ${month}, ${year}`;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Participantes</Text>
            <Text style={styles.date}>{ getDate() }</Text>
            
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor='#f1f0f2'
                    value={inputParticipant}
                    onChangeText={setInputParticipant}
                />
                <TouchableOpacity onPress={() => handleParticipantAdd(inputParticipant) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={participants}
                keyExtractor={item => item}
                renderItem={
                    ({ item }) => (
                        <Participant 
                            name={item} 
                            onRemove={() => { handleParticipantRemove(item) }} 
                        />
                    )
                }
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        A lista não possui nenhum nome, tente adicionar um acima.
                    </Text>
                )}
            />
        </View>
    );
}