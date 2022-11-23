import dash
from dash import html


app = dash.Dash(__name__)

app.layout = html.Div(
    children=[
        html.Iframe(
            src="assets/2022-11-11_160000_drops_in_paid_impressions.html",
            style={"height": "1067px", "width": "100%"},
        )
    ]
)

if __name__ == "__main__":
    app.run_server(debug=True)