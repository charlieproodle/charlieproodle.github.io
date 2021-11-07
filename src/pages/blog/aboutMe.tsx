import React from 'react'


const styles = {
    container: {
        border: "solid 2px black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: '10%'
    }
}

const AboutMe = () => {
    return (
        <div style={styles.container}>
            Hi, I'm Charlie, a software engineer based in London,UK
        </div>
    )
}

export default AboutMe
