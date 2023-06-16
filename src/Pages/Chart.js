import React from 'react';
import {View, StyleSheet, SafeAreaView, processColor} from 'react-native';
import LineChart from 'react-native-charts-wrapper/lib/LineChart';
import {useSelector} from 'react-redux';

function Chart(props) {
  const {bitcoinArray} = useSelector(state => state.bitcoinArray);
  const values = bitcoinArray.map(item => item.quote?.USD.price);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <LineChart
          style={styles.chart}
          drawGridBackground={false}
          borderColor={processColor('teal')}
          borderWidth={1}
          drawBorders={true}
          autoScaleMinMaxEnabled={false}
          touchEnabled={true}
          dragEnabled={true}
          scaleEnabled={true}
          scaleXEnabled={true}
          scaleYEnabled={true}
          pinchZoom={true}
          doubleTapToZoomEnabled={true}
          highlightPerTapEnabled={true}
          highlightPerDragEnabled={false}
          marker={{
            enabled: true,
            digits: 2,
            backgroundTint: processColor('teal'),
            markerColor: processColor('red'),
            textColor: processColor('white'),
          }}
          data={{
            dataSets: [
              {
                values: values,
              },
            ],
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  chart: {
    flex: 1,
  },
});

export default Chart;
