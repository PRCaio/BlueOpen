import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import Pie from 'react-native-pie'

const Grafic = (props) => {
  var divisao = props.btg + props.bra
  var btg = 10
  var bra = Math.trunc(props.bra * 100/divisao)
    return (
      <View style={styles.container}>
          <Text style={styles.gaugeText}>Setembro{bra}</Text>
          <View
            style={{
              paddingVertical: 15,
              flexDirection: 'row',
              width: 350,
              justifyContent: 'center',
            }}
          >
            <Pie
              radius={80}
              innerRadius={60}
              sections={[
                {
                  percentage: 55,
                  color: 'red',
                },
                {
                  percentage: 45,
                  color: `#0000cd`,
                },
              ]}
              dividerSize={6}
              strokeCap={'butt'}
            />
            <View
                style={styles.gauge}
              >
                <Text
                  style={styles.gaugeText}
                >
                 Gasto total
                </Text>
                <Text
                  style={styles.gaugeText}
                >
                 R$ 5000,00
                </Text>
              </View>
            
          </View>
          
        </View>
    )
  
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center' },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 18,
  },
  marc: {
    width:20,
    height: 20,
    backgroundColor: 'red', 
    borderRadius: 13
    
  }
})

export default Grafic;