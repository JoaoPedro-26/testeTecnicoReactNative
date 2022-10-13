import React, { Component, useCallback, useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';
import api from '../../api';

const pokemonsIniciais = [
    { id: 1, nome: "Bulbasauro"},
    { id: 4, nome: "Charmander"},
    { id: 7, nome: "Squirtle"},
];

export default function Home () {

    const [openInfos, setOpenInfos] = useState(false);
    const [apiInfos, setApiInfos] = useState([]);

    /* function infosAPI () {
        setApiInfos(true);
        
        api.get("http://localhost:3000/posts",)
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log("ocorreu um erro: "+ err);
        });
    };  */

    useEffect(() => {
         fetch("http://localhost:3000/posts")
         .then(response => response.json())
          .then((response) => {
            console.log(response);
            setApiInfos([0,1]);
          })
          .catch(e => console.log(JSON.stringify(e)))
          ;
    }, []);

    //codigo exemplo de uma pokedex para testar o funcionamento da API
    /* const [ pokemonEscolhido, setPokemonEscolhido ] = useState(null);

    const getPokemonData = () => {
    const endpoint = `http://localhost:3000/posts`;

    fetch(endpoint)
      .then(resposta => resposta.json())
        .then( json => {
          const pokemon = {
            nome: json.name,
            img: json.photo,
            date: json.dataDeAdmissao,
            function: json.cargo,
            cellphone: json.telefone,
          };
          console.debug(json);
          setApiInfos(pokemon);
        })
        .catch(() => {
          Alert.alert('Erro', 'Não foi possível carregar os dados do Pokémon');
        });
    }; */

    function handleClickButton (e) {
        setOpenInfos(true);
    };

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.headerImage} source={require('../../assets/Images/Mobile.png')}/>
                </View>

                <Text style={styles.title}>Funcionarios</Text>

            <View style={styles.sectionStyle}>
                <TextInput
                    style={styles.input}
                    placeholder="Pesquisar"
                />
                <Image style={styles.imageTest} source={require('../../assets/Images/Default.png')}/>
            </View>

            <View style={styles.teste}>
                <View style={styles.infos}>
                    <Text style={styles.textInfos}>FOTO</Text>
                    <Text style={styles.textInfos}>NOME</Text>
                    <Text style={styles.textInfos}>.</Text>
                </View>

             {apiInfos.map(infos => (
                <View>
                    <Text>aaaaa</Text>
                    {openInfos ? (
                        <View>
                            <Text>Cargo {infos.cargo}</Text>
                            <Text>Data de admissão {infos.dataDeAdmissao}</Text>
                            <Text>Telefone {infos.telefone}</Text>
                        </View>
                    ) : (
                        <View style={styles.profilePeople}>
                            <Image style={styles.photo}>{infos.photo}</Image>
                            <Text style={styles.profileName}>{infos.name}</Text>
                            <Image style={styles.photo} source={require('../../assets/Images/ArrowIcon.png')} onClick={handleClickButton} />
                        </View>
                    )}
                </View>
            ))}

        {/* {apiInfos != null && (
          <View style={styles.pokemonBox}>
            <Text style={styles.pokemonNome}>Nome: {apiInfos.nome}</Text>
            <Text style={styles.pokemonPeso}>Peso: {apiInfos.date}</Text>
            
            <Image resizeMode="stretch" source={{uri:pokemonEscolhido.img}} style={styles.pokemonImg} />
          </View>
        )}

        {pokemonsIniciais.map( pokemon => (
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{pokemon.nome}</Text>
            <Image resizeMode="stretch" source={{uri:pokemon.photo}} style={styles.photo} />
            <Image style={styles.photo} source={require('../../assets/Images/ArrowIcon.png')} onClick={() => getPokemonData(pokemon.id)} />
            <Button title="Dados do pokémon" onPress={()=>getPokemonData(pokemon.id)}/>
          </View>
        ))} */}
            
                
        </View>

        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#DFDFDF',
    },
    header: {    
        marginTop: 50,
        left: '0%',
        
    },
    headerImage: {
        width: 375,
        height: 60,
        marginLeft: 0,
    },
    title: {
        fontSize: 30,
        marginLeft: 50,
        fontWeight: 'bold',
    },
    input: {
        
    },
    sectionStyle: {
        alignSelf: 'center',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width: 290,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#FFFFFF',
      },
    imageTest: { 
        height: 25, 
        width: 25, 
        resizeMode: 'stretch', 
        alignItems: 'center', 
    },
    teste: {
        alignItems: 'center'
    },
    infos: {
        width: 335,
        height: 47,
        backgroundColor: '#5984C0',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textInfos: {
        fontSize: 16,
        color: '#FFFFFF',
        alignSelf: 'center',
    },
    profilePeople: {
        width: 335,
        height: 47,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    photo: {
        width: 34,
        height: 34,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    profileName: {
        fontSize: 16,
        color: '#1C1C1C',
        fontWeight: '400',
    }
})