import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from './pages/posts/PostPage';
import PostsPage from './pages/posts/PostsPage';
import { useCurrentUser } from './context/CurrentUserContext';

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  
  return (
    
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>

            <Switch>
              <Route 
                exact 
                path="/" 
                render={() => <>
                  <h1>Get your ideas out there On The Line!</h1>
                  <PostsPage message="No results found. Adjust the search keyword."/>
              </>} 
              />
              <Route 
                exact 
                path="/feed" 
                render={() => <>
                  <h1>Get your ideas out there On The Line!</h1>
                  <PostsPage message="No results found. Adjust the search keyword or follow a user."
                  filter={`owner__followed__owner__profile=${profile_id}&`}
                  />
              </>} 
              />
              <Route 
                exact 
                path="/liked" 
                render={() => <>
                  <h1>Get your ideas out there On The Line!</h1>
                  <PostsPage message="No results found. Adjust the search keyword or like a post."
                  filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                  />
              </>} 
              />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/posts/create" render={() => <PostCreateForm /> } />
              <Route exact path="/posts/:id" render={() => <PostPage /> } />
              <Route render={() => <h1>Page Not Found!</h1>} />
            </Switch>
            
          <a href="https://www.flaticon.com/free-icons/exchange-ideas" title="exchange ideas icons">Exchange ideas icons created by Flat Icons - Flaticon</a>
          </Container>
        </div>
      
  );
}

export default App;
