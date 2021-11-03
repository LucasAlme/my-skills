import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Button from '../../components/button';
import { styles } from './style';

interface SkillData {
    id: string;
    name: string;
    date?: Date;
}

export default function Home() {

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [gretting, setGretting] = useState('');

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGretting('Good morning');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGretting('Good afternoon');
        } else {
            setGretting('Good night');
        }
    }, [])

    function handleNewSkill() {
        if (newSkill != '') {
            const data = {
                id: String(new Date().getTime()),
                name: newSkill,

            }
            setMySkills(oldState => [...oldState, data]);
        }

    }


    function handleRemoveSkill(id: string) {
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ))

    }
    return (
        <View style={styles.background}>
            <Text style={styles.title}>Welcome, Lucas</Text>
            <Text style={{ marginVertical: 5 }}>{gretting}</Text>
            <TextInput style={styles.input} placeholder="New Skill" value={newSkill} onChangeText={(txt) => setNewSkill(txt)} />
            <Button customStyle={styles.btnStyle} value="Add" onPress={handleNewSkill} opacity={0.7} />
            <Text style={[styles.title, { marginVertical: 40 }]}>My Skills</Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.btnskill} onPress={() => handleRemoveSkill(item.id)}>
                        <Text style={styles.skill}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}