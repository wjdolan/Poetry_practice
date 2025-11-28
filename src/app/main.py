import streamlit as st
import pandas as pd
import numpy as np

def main():
    st.title("🚀 Streamlit App Template")
    st.write("Python template")

    df = pd.DataFrame({
        "numbers": np.arange(5),
        "squared": np.arange(5) ** 2
    })

    st.dataframe(df)

if __name__ == "__main__":
    main()
