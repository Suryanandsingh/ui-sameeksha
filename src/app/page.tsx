import { ApolloProvider } from '@apollo/client';
import DashBoard from './dashboard/dashboard';
import MainHeader from './header/mainHeader';
import client from '@/lib/graphQL/apollo-client';
import styles from './page.module.css'



const MainPage = () => {
  return(
    <ApolloProvider client={client}>
      <div className={'background'}>
        <MainHeader isTransparent={false}/>
        <main>
          <DashBoard/>
        </main>
      </div>
    </ApolloProvider>
  )
}

export default MainPage;