import { StyleSheet } from 'react-native';
import React from 'react';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-2371691919049035~8629847179';

function Banner() {
  return (
    <BannerAd 
      style ={styles.banner}
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    />
  );
}

const styles = StyleSheet.create ({
  banner:{
    
  }
})

export default Banner;