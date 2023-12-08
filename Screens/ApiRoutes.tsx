import { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, Image, TouchableOpacity , ScrollView } from 'react-native';
import rncStyles from 'rncstyles';


export default function ApiRoutes({ navigation , route } :any ) {
    const [courseList, setcourseList] = useState<any>([]);
    const token = route.params?.token

    const getData = () => {
        let api = 'http://192.168.100.109:5000/courses';
        axios.get(api, { headers: { Authorization: `Bearer ${token}` } })
            .then((res : any) => {
                setcourseList([res.data]);
                console.log(res.data);
            })
            .catch((err : any) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getData();
    }, [token]);

    return (
        <ScrollView>
  <View style={rncStyles.border1}>
            <Text style={rncStyles.fs1}>Courses</Text>
            {courseList.map((course : any , key :any) => (
                <View key={course.id} style={[rncStyles.shadow2]}>
                        <Text>{course.name}</Text>
                        <Text>{course.shortName}</Text>
                        <Text>{course._id}</Text>
                        <Text>{course.Fee}</Text>
                </View>
            ))}
        </View>
        </ScrollView>
    );
}




