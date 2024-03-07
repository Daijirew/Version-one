import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="https://moewalls.com/wp-content/uploads/2022/04/purple-sky-thumb-728x410.jpg" alt="" />
            <p></p>
        </div>
        <div className={styles.port_items}>
            <img src="https://wallpapercave.com/wp/wp6027339.jpg" alt="" />
            <p></p>
        </div>
        <div className={styles.port_items}>
            <img src="https://png.pngtree.com/thumb_back/fw800/background/20231221/pngtree-sunset-pale-pink-and-purple-anime-sky-image_15534452.png" alt="" />
            <p></p>
        </div>
        <div className={styles.port_items}>
            <img src="https://img.freepik.com/premium-photo/anime-purple-clouds-wallpaper_969965-15616.jpg?w=2000" alt="" />
            <p></p>
        </div>
        <div className={styles.port_items}>
            <img src="https://img.freepik.com/free-vector/evening-cloudy-sky-purple-background-with-group-cumulus-cirrus-clouds-flat-cartoon-illustration_1284-62768.jpg" alt="" />
            <p></p>
        </div>
        <div className={styles.port_items}>
            <img src="https://img.freepik.com/premium-photo/beautiful-clouds-sky-with-baby-pink-colors-anime-style-wallpaper-art-generative-ai_544576-52.jpg" alt="" />
            <p></p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio