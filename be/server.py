import http.server
import socketserver
import json

# Define a custom request handler to handle POST requests
class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data.decode('utf-8'))
        print(data)

        # Process the received data (you can save it to a database or perform any other actions)
        # For this example, we'll simply send a response back to the front end
        response = {'message': 'Data received successfully'}
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(response).encode('utf-8'))

# Create a socket server with the custom request handler
port = 8000
# webServer = HTTPServer((host_name, server_port), handler)
with socketserver.TCPServer(("", port), CustomHandler) as httpd:
    print("Server started at port", port)
    httpd.serve_forever()
