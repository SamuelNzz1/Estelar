
  import { SafeAreaView } from 'react-native-safe-area-context';

  import Routes from './src/routes';
  export default function App() {
    return (
      <SafeAreaView style = {{flex:1}}>
          <Routes></Routes>
      </SafeAreaView>
    );
  }


