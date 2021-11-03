import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Button from '../../components/button';
import style from './style';

export default function Home() {

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);


    function handleNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    return (
        <View style={style.background}>
            <Text style={style.title}>Welcome, Lucas</Text>
            <TextInput style={style.input} placeholder="New Skill" value={newSkill} onChangeText={(txt) => setNewSkill(txt)} />
            <Button customStyle={style.btnStyle} value="Add" onPress={handleNewSkill} opacity={0.7} />
            <Text style={[style.title, { marginVertical: 50 }]}>My Skills</Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <TouchableOpacity style={style.btnskill} >
                        <Text style={style.skill}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}