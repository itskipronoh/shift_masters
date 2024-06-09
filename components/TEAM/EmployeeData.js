import React, { useState, useEffect  } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  KeyboardAvoidingView
} from 'react-native';


const EmployeeData = (navigation) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cnic, setCnic] = useState('');
  const [roll, setroll] = useState('');
  const [employeeList, setEmployeeList] = useState([]);

  // fetch('http://127.0.0.1:3000/viewteam', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const driverList = data.Driver.map((driver) => ({
  //       id: driver._id,
  //       roll: driver.D_roll,
  //       name: driver.D_name,
  //       phone: driver.D_phone,
  //       cnic: driver.D_cnic,
  //     }));

  //     const labourList = data.labour.map((labour) => ({
  //       id: labour._id,
  //       roll: labour.L_roll,
  //       name: labour.L_name,
  //       phone: labour.L_phone,
  //       cnic: labour.L_cnic,
  //     }));

  //     const newTeaList = [...driverList, ...labourList];
  //     setEmployeeList(newTeaList);
  //   });

  const handleNameChange = (value) => {
    setName(value);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleCnicChange = (value) => {
    setCnic(value);
  };
  const handlerollChange = (value) => {
    setroll(value);
  };

  
  //const handleAddEmployee = () => {
  // if(name === '' || phone === '' || (phone.length < 11) || (phone.length > 13) ||cnic === '' || ((cnic.length < 13) || (cnic.length > 13) || roll === '')) {
  //     console.log(name, phone, cnic, roll);
  //     alert('Please Fill All the Fields Correctly');
  //   } else {
  //     if (roll === 'driver' || roll === 'Driver') {
  //         const fdata = {
  //           roll: roll,
  //           Driver_name: name,
  //           Driver_phone: phone,
  //           Driver_cnic: cnic,
  //         };
  //         console.log(fdata);
  //         fetch('http://127.0.0.1:3000/addteam', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify(fdata),
  //         })
  //           .then(response => response.json())
  //           .then(data => {
  //             if (data.error) {
  //               console.log(data.error);
  //             } else {
  //               console.log(data);
  //               fetch('http://127.0.0.1:3000/viewteam', {
  //                 method: 'GET',
  //                 headers: {
  //                   'Content-Type': 'application/json',
  //                 },
  //               })
  //                 .then(response => response.json())
  //                 .then(data => {
  //                   const driverList = data.Driver.map(driver => ({
  //                     id: driver._id,
  //                     roll: driver.D_roll,
  //                     name: driver.D_name,
  //                     phone: driver.D_phone,
  //                     cnic: driver.D_cnic,
  //                   }));
    
  //                   const labourList = data.labour.map(labour => ({
  //                     id: labour._id,
  //                     roll: labour.L_roll,
  //                     name: labour.L_name,
  //                     phone: labour.L_phone,
  //                     cnic: labour.L_cnic,
  //                   }));
    
  //                   const newTeaList = [...driverList, ...labourList];
  //                   setEmployeeList(newTeaList);
  //                 })
  //                 .catch(error => {
  //                   console.error('Error:', error);
  //                 });
  //             }
  //           })
  //           .catch(error => {
  //             console.error('Error:', error);
  //           });
  //       } else if (roll === 'labour' || roll === 'Labour') {
  //         const fdata = {
  //           roll: roll,
  //           labour_name: name,
  //           labour_phone: phone,
  //           labour_cnic: cnic,
  //         };
  //         console.log(fdata);
  //         fetch('http://127.0.0.1:3000/addteam', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify(fdata),
  //         })
  //           .then(response => response.json())
  //           .then(data => {
  //             if (data.error) {
  //               console.log(data.error);
  //             } else {
  //               console.log(data);
  //               fetch('http://127.0.0.1:3000/viewteam', {
  //                 method: 'GET',
  //                 headers: {
  //                   'Content-Type': 'application/json',
  //                 },
  //               })
  //                 .then(response => response.json())
  //                 .then(data => {
  //                   const driverList = data.Driver.map(driver => ({
  //                     id: driver._id,
  //                     roll: driver.D_roll,
  //                     name: driver.D_name,
  //                     phone: driver.D_phone,
  //                     cnic: driver.D_cnic,
  //                   }));
    
  //                   const labourList = data.labour.map(labour => ({
  //                     id: labour._id,
  //                     roll: labour.L_roll,
  //                     name: labour.L_name,
  //                     phone: labour.L_phone,
  //                     cnic: labour.L_cnic,
  //                   }));
    
  //                   const newTeaList = [...driverList, ...labourList];
  //                   setEmployeeList(newTeaList);
  //                 })
  //                 .catch(error => {
  //                   console.error('Error:', error);
  //                 });
  //             }
  //           })
  //           .catch(error => {
  //             console.error('Error:', error);
  //           });
  //       }
  //     setName('');
  //     setPhone('');
  //     setCnic('');
  //     setroll('');
  //     alert('Employee Details Added Successfully');
  //   }
 // };
  const handleAddEmployee = () => {
    if( name === '' || phone === '' || (phone.length < 11) || (phone.length > 13) ||cnic === '' || ((cnic.length < 13) || (cnic.length > 13))) {
        alert('Please Fill All the Fields Correctly');
      } else {
        const newEmployee = {
          id: employeeList.length + 1,
          name: name,
          phone: phone,
          cnic: cnic,
          image: imageUri
        };
        setEmployeeList([...employeeList, newEmployee]);
        setName('');
        setPhone('');
        setCnic('');
        // setImage(null);
        //setImageUri('');
        alert('Employee Details Added Successfully');
      }
    };

  //const handleDeleteEmployee = (employee) => {
    // if(employee.roll == 'driver' || employee.roll == 'Driver') {
    //   const sdata =
    //   {
    //     roll: employee.roll,
    //     Driver_cnic: employee.cnic
    //   }
    //   fetch(`http://127.0.0.1:3000/deleteteam`, {
    //     method: 'DELETE',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body : JSON.stringify(sdata)
    //   })
    //   .then(response => response.json())
    //   .then(() => {
    //       fetch('http://127.0.0.1:3000/viewteam', {
    //         method: 'GET',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       })
    //         .then(response => response.json())
    //         .then(data => {
    //           const driverList = data.Driver.map(driver => ({
    //             id: driver._id,
    //             roll: driver.D_roll,
    //             name: driver.D_name,
    //             phone: driver.D_phone,
    //             cnic: driver.D_cnic,
    //           }));
  
    //           const labourList = data.labour.map(labour => ({
    //             id: labour._id,
    //             roll: labour.L_roll,
    //             name: labour.L_name,
    //             phone: labour.L_phone,
    //             cnic: labour.L_cnic,
    //           }));
  
    //           const newTeaList = [...driverList, ...labourList];
    //           setEmployeeList(newTeaList);
    //         })
    //         .catch(error => {
    //           console.error('Error:', error);
    //         });
    //     })
    //     .catch(error => {
    //       console.error('Error deleting vehicle:', error);
    //     });
    // }else if(employee.roll == 'labour' || employee.roll == 'Labour') {
    //   const sdata =
    //   {
    //     roll: employee.roll,
    //     labour_cnic: employee.cnic
    //   }
    //   fetch(`http://127.0.0.1:3000/deleteteam`, {
    //     method: 'DELETE',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body : JSON.stringify(sdata)
    //   })
    //     .then(() => {
    //       fetch('http://127.0.0.1:3000/viewteam', {
    //         method: 'GET',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       })
    //         .then(response => response.json())
    //         .then(data => {
    //           const driverList = data.Driver.map(driver => ({
    //             id: driver._id,
    //             roll: driver.D_roll,
    //             name: driver.D_name,
    //             phone: driver.D_phone,
    //             cnic: driver.D_cnic,
    //           }));
  
    //           const labourList = data.labour.map(labour => ({
    //             id: labour._id,
    //             roll: labour.L_roll,
    //             name: labour.L_name,
    //             phone: labour.L_phone,
    //             cnic: labour.L_cnic,
    //           }));
  
    //           const newTeaList = [...driverList, ...labourList];
    //           setEmployeeList(newTeaList);
    //         })
    //         .catch(error => {
    //           console.error('Error:', error);
    //         });
    //     })
    //     .catch(error => {
    //       console.error('Error deleting vehicle:', error);
    //     });

    // }  
    // console.log(employee);
 // };
  const handleDeleteEmployee = (id) => {
    setEmployeeList(employeeList.filter(emp => emp.id !== id));
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.heading}>Add Employee</Text>
            
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="black"
            value={name}
            onChangeText={handleNameChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="black"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={handlePhoneChange}
          />
          <TextInput
            style={styles.input}
            placeholder="CNIC without dashes e.g:(3250215963863)"
            placeholderTextColor="black"
            keyboardType="numeric"
            value={cnic}
            onChangeText={handleCnicChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Roll of Employee i.e: (Driver or Labour)"
            placeholderTextColor="black"
            keyboardType="default"
            value={roll}
            onChangeText={handlerollChange}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddEmployee}>
            <Text style={styles.buttonText}>Add Employee</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.employeeListContainer}>
          <Text style={styles.heading}>Employee List</Text>
          {employeeList.map((employee, index) => (
            <View style={styles.employeeCard} key={index}>
              <Text style={styles.employeeName}>Name: {employee.name}</Text>
              <Text style={styles.employeePhone}>Phone#: {employee.phone}</Text>
              <Text style={styles.employeeCnic}>CNIC: {employee.cnic}</Text>
              <Text style={styles.employeeroll}>Roll: {employee.roll}</Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteEmployee(employee)}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
    </View>
  </ScrollView>
</KeyboardAvoidingView>
);
};
export default EmployeeData;
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff'
},
scrollContainer: {
flex: 1,
padding: 20
},
innerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
formContainer: {
marginBottom: 20
},
heading: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 10
},
input: {
height: 40,
borderColor: '#bf9000',
borderWidth: 1,
borderRadius: 5,
padding: 10,
color:'black',
marginBottom: 10
},
addButton: {
backgroundColor: '#bf9000',
borderColor: '#000000',
borderWidth: 1,
padding: 10,
marginTop : 10, 
borderRadius: 5,
alignItems: 'center',
justifyContent: 'center',
},
employeeListContainer: {
marginTop: 20,
marginBottom:20
},
employeeCard: {
borderColor: '#000000',
borderWidth: 1,
backgroundColor: '#bf9000',
padding: 10,
borderRadius: 5,
marginBottom: 10
},
employeeName: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 5
},
employeeImage:{
  
},
employeePhone: {
fontSize: 16,
marginBottom: 5
},
employeeCnic: {
fontSize: 16,
marginBottom: 10
},
editButton: {
    backgroundColor: '#007cc3',
    width:100,
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    marginRight:5,
},
deleteButton: {
    backgroundColor: 'red',
    width:100,
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 10,
    padding: 5,
    borderRadius: 5
},
buttonText: {
fontSize: 16,
fontWeight: 'bold',
color: 'black'
}
});
             
