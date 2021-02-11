import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Questions.css";

export default function Questions(){
  return (
    <div className="Questions">
        <h1>Making a http server in Python</h1>
        <p>Asked 10 years, 2 months ago   Active 4 years ago   Viewed 5k times</p>
        <h3>Just made a http server handling only file uploading. Want to add a feature to the http server sharing the file on Get request by a http client.
            I have no idea how to show the file to clients. HELP!</h3>
        <p>Should have told that I used HTTPServer and BaseHTTPRequest classes in my project. So want to keep them as it is and add the feature. – <b>Infinity Challenger</b> Dec 4 '10 at 2:37
        <Button block size="lg" type="submit" onClick={()=>{alert("Upvoted!")}}>
          Upvote
        </Button>
        <Button block size="lg" type="submit" onClick={()=>{alert("Downvoted!")}}>
          Downvote
        </Button>
        </p>
        <p>If you already implemented an http server that supports POST, then it should be trivial to implement get, check SimpleHTTPServer's code. check : /usr/lib/python2.6/SimpleHTTPServer.py – <b>OneOfOne</b> Dec 4 '10 at 2:45
        <Button block size="lg" type="submit" onClick={()=>{alert("Upvoted!")}}>
          Upvote
        </Button>
        <Button block size="lg" type="submit" onClick={()=>{alert("Downvoted!")}}>
          Downvote
        </Button>
        </p>
        <p>@user518978 if you can upload a file you are almost there. Your server will need to keep track of the uploaded files somehow (presumably you are saving these files somewhere on the filesystem). You could implement a method that when the client requests the root ("GET /") you return a list of files. Then the client can request the particular file you want to stream to it. – <b>martineno</b> Dec 4 '10 at 2:48
        <Button block size="lg" type="submit" onClick={()=>{alert("Upvoted!")}}>
          Upvote
        </Button>
        <Button block size="lg" type="submit" onClick={()=>{alert("Downvoted!")}}>
          Downvote
        </Button>
        </p>
    </div>
  );
}