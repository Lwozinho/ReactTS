import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css'

import './global.css';

interface Post {

}


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:'https://github.com/Lwozinho.png',
      name: 'Leonardo Nascimento',
      role: 'CTO @ ROCKETSEAT'
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ], 
    publishedAt: new Date('2024-05-30 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'CO @ ROCKETSEAT'
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ], 
    publishedAt: new Date('2024-05-31 20:00:00')
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        {posts.map(post =>{
          return (
          <Post
            key={post.id}
            post= {post}
          />
          )
        })}
        </main>
      </div>
    </div>
  )
}