import { Component, Input, SimpleChanges } from '@angular/core';
import * as mammoth from 'mammoth';


@Component({
  selector: 'app-readwordfile',
  templateUrl: './readwordfile.component.html',
  styleUrls: ['./readwordfile.component.css']
})
export class Readwordfile {
  selectedQuestion: string | undefined;
  showDropdown: boolean = false;
  showAnswer: { [key: string]: boolean } = {};

  codeSnippets: { [key: string]: string } = {
    reactjs:`
    React Basics: https://www.youtube.com/playlist?list=PLWnZ0qt0PImVaDkDbF96dnRGO0_lXVLKf

In ES6 we use constructor and super()
But in ES& no need to use 
Create a method with arrow functions:
Methodname= () => {
}
Spread operator(…): using tripledot and reference:
Example in array:
Ex: set1 ={1,2,3}
set2 ={…set1,6,7,8}
Console.log(set2);//o/p: 1,2,3,6,7,8
Example in object:
set1 ={
name:”abc”,
}
Set2 ={
…set1,
Age: 20
}
Console.log(set2);//o/p: [Object,Object]{
Age: 20,
Name:”abc”
}
(destructuring)Assign variable to value:
Values=[10,20,30];
[a,b,c]=values
Console.log(values); a=10,b=20 c=30
Object destructuring: object lo vunna values const(email,age) ani tesukovachu.
values ={
Email:”test@gmail.com”,
Age: 25
}
const (email,age)= values;
console.log(email,age);//o/p: test@gmail.com,25

RestOperator: oka parameter ke enni values ani assign cheyavachu
const array ={…arr}=>console.log(arr);
array(10,20,30,40,50);it accept any arguments.//o/p: 10,20,30,40,50
10 oka varible ki assign cheyalante
(a,…arr) ila ivvali.

Array: we use below methods:
pop(),shift(),splice()
let arr ={10,20,30}
arr.push(40);//o/p:10,20,30,40
arr.pop();//last di remove avuthundi; o/p: 10,20,30
arr.shift();first value remove avuthundi:o/p: 20,30,40
second element ni remove cheyali so we use splice()
let index = 2;
arr.splice(index,1); o/p: 10,20,40
get position of valu using indexOf(1);
//array intilize;
let arr =[];
React start:
node –version
npm install create-react-app
npx create-react-app projectname
npm start
new ga create ayina project location path ki velli .code aunte new reactproject vs lo open avuthundi.
About react project folders
.gitignorefolders don’t move in git
package.json : all dependencies are exist.
App.js lo vunade index.html lo run avuthundi.
Create first app:
Import React from ‘react’;
const App = ()=>{
return ( <div </div>)
}
export default App;
Function component VS Class component:
ES7 React.redux/Graphql extention ni install chesukovali. It will give boilerplate code.
Class component:
Import React from ‘react’;
export default class App extends Component{
render(){
return ( <div </div>)
}
}
Print name:
export default class App extends Component{
state ={name=”rajesh”}
render(){
return ( <div>{this.state.name} </div>)
}
}
Note: jsx ni javascript lo use cheyalante ; use {}
Function component: no render() method .
Not using state here instead of state we use hooks useState()
Short cut cmd: racfce



Import React from ‘react’;
const App = ()=>{
const [name,setName] = useState(“world”)
return ( <div>{name} </div>)
}
export default App;
Note : state ,life cycle both are combine in hooks.
About state:
State ={}
For get we use {this.state.variablename}
About Props: oka component nundi inko component data transfer
Parent->child data we use
</Display>  shown output of display class data.
{this.props.name} idi display class lo vundali
<Display name={this.state.name}/> idi 
Styling in react: 2 ways 1.inline 2. Create a .css file and import
Remove App.css code :
h1{}
.container{ }
Samefolder ./
Import  “./App.css”;
React lo className =”container”  applied styles di container
Inline : style ={{ color:”white”}}
15 video: about useState()
const[count,setCount] = useState(0);
count lo ki 0 set avuthundi. 0 change cheyalante setCount use cheyali.
onclick ={()->setCount(count+1)}
16. video : useEffect()..after return method execute avagane useEffect() ki cal avuthundi.
useEffect(()->(console.log(“clicked”),[count]);
method lo count change ayithe use effect lo kuda update avuthundi.
Its called componentDidMount
17: Onchange(): text lo ichina value variable ki value={user} ila assign cheyali.
Ikada user anedi useState varible.
For ex:
const[user,setuser] = useState(“”);//defaule user is empty.
const handler=e=>{
setUser(e.target.value);//text box lo ichina value  received through e.target.value;
}
<input type =”text” value={user} name=”user” onChange={handler}/>
18.onSubmit():
const submitHandler = e=>{
e.preventdefault();//default prevent cheyalante we use.
}
<form onSubmit={submitHandler}>
</form>
19.Map()
Syntax: array.map((value,index)=><li>{value}</li>)
const arr =[“r”];
return (
{ arr.map(value,index)=><li>{value}</li>
}
)
About key ={index} //its avoid duplicates.
{ arr.map(value,index)=><li key={index}>{value}</li>//handle array of objects.
//handle array of objects.
Const arr =[
id:”1”,
name:”name”,
]
{arr.map((value)=> <li key={value.id}>{value.id}</li>}
value hold array of object.

20 .Filter()
Syntax: array.filter((varible) =>condition)
//j name tho vunna value kavali.
const names =[“j”,,”s”,”java”];
const filtered = names.filter(name=>name.includes(“j”));
return (
{filtered.map(item=><li>{item}</li>)}
)
21.Export vs export default
export  import {component}
export default -> import component
ex:
export const handler =()=>{
}
const handler =()=>{
}
export default handler;
22. Login form submit: onclick,onchange,onsubmit .usestate(),object destructuring.we should know.
const[data,setData] = useState({
username : ‘ ’,
password: ‘ ’
})
const{username,password} = data;//destructring
const changehandler = e=>{
setData(…data,[e.target.name,e.target.Value])
}
const submitHandler = e=>{
e.preventDefault();
console.log(data);
}
return (
<form onSubmit={submitHandler}>
<input type = “text” value ={username}>
<input type = “password” value={password} onChange ={changehandler}>

</form>
)
23.signUp form create:

import React, { useState } from 'react'
const SignUpForm = () => {
    const [data,setData] = useState({
        username: '',
        email:'',
        password:'',
        resetpassword : ''
    });

    const{username,email,password,resetpassword}=data;

    const onSubmitHandler = e=>{
        e.preventDefault();
        if(password==resetpassword){
            console.log(data);
        }
        else{
            console.log("passwords are not matching");
        }
    }

    const onChangeHandler = e=>{
      setData({...data,[e.target.name]:e.target.value});
  }
  return (
      <div>
          <form onSubmit={onSubmitHandler}>    
              <input type="text" name="username" value={username} onChange={onChangeHandler}/><br></br>
              <input type="email" name="email" value={email} onChange={onChangeHandler}/><br></br>
              <input type="password" name="password"  value={password} onChange={onChangeHandler}/><br></br>
              <input type="password" name="resetpassword" value={resetpassword} onChange={onChangeHandler}/><br></br>
              <input type="submit" name="submit" value="submit"/>
          </form>

      </div>
  )
}

export default SignUpForm;


========================
https://create-react-app.dev/docs/getting-started
install nodesjs so then execute below cmd
npx create-react-app imagesearchapp
it will generate reactproject with name as imagesearchapp.
It will be created below folders.
<img src="assets/images/reactjs/1.png" width="70%" height="70%">
<img src="assets/images/reactjs/2.png" width="70%" height="70%">
<img src="assets/images/reactjs/3.png" width="70%" height="70%">
1.Project->imagesearch
Now start the project. Whenever we search name .those name based search data will be appear.

By using axios we get apidata using useState we set response data from url and displayed the data .shown the below code.

<img src="assets/images/reactjs/4.png" width="70%" height="70%">
<img src="assets/images/reactjs/5.png" width="70%" height="70%">
In App.js
<img src="assets/images/reactjs/6.png" width="70%" height="70%">
<img src="assets/images/reactjs/7.png" width="70%" height="70%">
Output::
<img src="assets/images/reactjs/8.png" width="70%" height="70%">
2.Project  
textbox lo add chesina value textbox kinda shown delete click chesthe adi delete avuthundi .
<img src="assets/images/reactjs/9.png" width="70%" height="70%">
<img src="assets/images/reactjs/10.png" width="70%" height="70%">
<img src="assets/images/reactjs/11.png" width="70%" height="70%">
<img src="assets/images/reactjs/12.png" width="70%" height="70%">

3rd project : find weather temperature.
https://api.openwaethermap.org/data/2.5/weather?q=city}&appid=d885aa1d783fd13a55050afeef620fcb
    
    `,

kubernate:`
=> Open source orchestration platform

=> K8S is used to manage our containers

=> K8S provided a framework to handle containers related tasks
	(deployment, scaling, load balancing etc....)

=> K8S developed by Google and donated to CNCF

===============
K8S Advantages
===============

1) Container Orchestration

2) Auto Scaling

3) Self Healing

4) Load Balancing

==================
K8S Architecture
==================

=> K8S will follow cluster architecture (group of servers)

		=> Master Node / Control Plane
		=> Woker Nodes

=> K8S control plane will contain below components

	1) API Server
	2) Schedular
	3) Controller Manager
	4) ETCD

=> K8S worker node will container below components

	1) POD
	2) Containers
	3) Docker Engine
	4) Kublet
	5) Kube Proxy

=> To communicate with K8S control plane we have 2 options

	1) UI (Web Dashboard)

	2) Kubectl (CLI)


==============================
K8S Architecture Components
==============================

=> API Server will recieve incoming requests and it will store into ETCD.

=> ETCD is k8s cluster database

=> Schedular will check pending tasks in ETCD and it will schedule those task in worker nodes.

=> Schedular will get available workers nodes information by using kubelet.

=> Kubelet is called as Worker node agent.

=> Kube-Proxy provides network for cluster communication

=> POD is a smallet building block that we run in kubernetes cluster. POD represents runtime instance of our application.

Note: In k8s, our project  will be excuted as a POD. Inside POD containers will be created.

=> Controller-Manager will monitor all k8s resources functionality.



### EKS Cluster Setup DOC : https://github.com/ashokitschool/DevOps-Documents/blob/main/EKS-Setup.md

===================================
Kubernete Cluster Core Components
===================================

1) Control Plane

	1.1) API Server
	1.2) Schedular
	1.3) Controller - Manager
	1.4) ETCD

2) Worker Node

	2.1) Kubelet
	2.2) Kube-Proxy
	2.3) Docker Engine
	2.4) Container
	2.5) POD


============
What is POD
============

=> POD is a smallest building block that we can deploy in k8s cluster

=> Our application will be deployed in k8s cluster as a POD only

=> For one application we can create multiple POD replicas for high availability

=> For every POD one IP address will be generated.

=> If POD got damaged/crashed then K8S will replace it (Self-healing)

=> To create PODS we will use MANIFEST YML files

Note: By default PODS are accessible only with in the cluster (we can't access outside)

=> To expose PODS for outside access we need to use K8S services concept.

==========================
What is Service in K8S ?
==========================

=> K8S service is used to expose PODS

=> We have 3 types of services

1) Cluster IP (To access PODS with in the cluster)

2) Node Port (To access PODS using NODE Public IP)

3) Load Balancer (To distribute the traffic to pod replicas)

=========================
K8S Manifest YML syntax
=========================
---
apiVersion: apps/v1
kind: Deployment
metadata:
 name: javawebappdeployment
spec:
 replicas: 2
 strategy:
 	type: RollingUpdate
 selector:
 	matchLabels:
 	 app: javawebap
 template:
  metadata:
   name: javawebapppod
   labels:
    app: javawebapp
  spec:
   containers:
   - name: javawebappcontainer
     image: ashokit/javawebapp
     ports:
      - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
 name: javawebappsvc
spec:
 type: LoadBalancer
 selector:
  app: javawebapp
 ports:
 - port: 80
   containerPort: 8080
...


# check pods running
$ kubectl get pods

# check pods running in which worker node
$ kubectl get pods -o wide

# check services created
$ kubectl get svc

# check deployments created
$ kubectl get deployment

# Execute k8s manifest yml
$ kubectl apply -f <yml>

# Check pod logs
$ kubectl logs <pod-name>

# Delete pod
$ kubectl delete pod <pod-name>

# delete resources we have created
$ kubectl delete all --all


======================================================================

Docker Playlist : https://www.youtube.com/watch?v=8dccz7ca4FM&list=PLpLBSl8eY8jQ0lp6FeOtObvkfOddJW6YM

EFK Stack Setup in K8S : https://www.youtube.com/watch?v=8MLcbbfEL1U

HPA in K8S : https://www.youtube.com/watch?v=c-tsJrcB50I

====================================================================
    
    `,
    apachekafka: `
    Download and install
    <img src="assets/images/apachekafka/1.png" width="70%" height="70%">
    Install 2.12
    <img src="assets/images/apachekafka/2.png" width="70%" height="70%">
    Kafka-server-start and zookeeper-server-start.sh both are inside of kafka-2-12/bin/windows
And kafka-console-producer and kafka-console-consumer.sh both files are there here.

    <img src="assets/images/apachekafka/3.png" width="70%" height="70%">
    Go inside config folder open server.prop here broker and zookeeper info there here.
    <img src="assets/images/apachekafka/4.png" width="70%" height="70%">
    <img src="assets/images/apachekafka/5.png" width="70%" height="70%">
    About topic its is the table its exist inside broker
Kafka client with help of topic name it will read the msges.
Partion  messages are located inside topic.
Partions are immutable,its assign a offset
About zookeeper:
Broker register in zookeeper and zookeeper manages and monitor the health of broker.
https://github.com/dilipsundarraj1
after open github link click on repositories click on kafka-for-devlopers-using-springboot

    <img src="assets/images/apachekafka/6.png" width="70%" height="70%">
    Start zookeeper and broker 
https://github.com/dilipsundarraj1/kafka-for-developers-using-spring-boot/blob/main/SetUpKafka.md
•	Make sure you are inside the bin/windows directory.
Step 1:For start zookeeper : before give below command kafka folder paste in c:/ only otherwise you get input path long error.
zookeeper-server-start.bat ..\..\config\zookeeper.properties
step 2: For start broker: add below in kafka/config/server.properties
listeners=PLAINTEXT://localhost:9092
auto.create.topics.enable=false
and inside windows folder cmd give below cmd.
kafka-server-start.bat ..\..\config\server.properties
step 3: to create topic :
kafka-topics.bat --create --topic test-topic --bootstrap-server localhost:9092 --replication-factor 1 --partitions 4

    <img src="assets/images/apachekafka/7.png" width="70%" height="70%">
    step 4:  give inputs to producer after give below command
kafka-console-producer.bat --broker-list localhost:9092 --topic test-topic

    <img src="assets/images/apachekafka/8.png" width="70%" height="70%">
    step 4:  give inputs to producer after give below command
kafka-console-producer.bat --broker-list localhost:9092 --topic test-topic

    <img src="assets/images/apachekafka/9.png" width="70%" height="70%">
    step 5 : read inputs from producer as a consumer.
kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic test-topic --from-beginning

    <img src="assets/images/apachekafka/10.png" width="70%" height="70%">
    
Springboot curd for kafka:

https://github.com/dilipsundarraj1/kafka-for-developers-using-spring-boot-v2

    <img src="assets/images/apachekafka/11.png" width="70%" height="70%">
    We need to do code setup for below json
    <img src="assets/images/apachekafka/12.png" width="70%" height="70%">
    <img src="assets/images/apachekafka/13.png" width="70%" height="70%">
    Enable annotations in intellij
    <img src="assets/images/apachekafka/14.png" width="70%" height="70%">
    <img src="assets/images/apachekafka/15.png" width="70%" height="70%">
    <img src="assets/images/apachekafka/16.png" width="70%" height="70%">
    <img src="assets/images/apachekafka/17.png" width="70%" height="70%">
    <img src="assets/images/apachekafka/18.png" width="70%" height="70%">
    Using spring.kafka is matched with application.yml spring.kafka then its read the application.yml file
    <img src="assets/images/apachekafka/19.png" width="70%" height="70%">
    <img src="assets/images/apachekafka/20.png" width="70%" height="70%">
    <img src="assets/images/apachekafka/21.png" width="70%" height="70%">
    Create a topic
    <img src="assets/images/apachekafka/22.png" width="70%" height="70%">
    <img src="assets/images/apachekafka/23.png" width="70%" height="70%">
    <img src="assets/images/apachekafka/24.png" width="70%" height="70%">
    Commands 
    <img src="assets/images/apachekafka/25.png" width="70%" height="70%">
    <img src="assets/images/apachekafka/26.png" width="70%" height="70%">
    Using kafkatemplate.send()
    <img src="assets/images/apachekafka/27.png" width="70%" height="70%">
    <img src="assets/images/apachekafka/28.png" width="70%" height="70%">
    <img src="assets/images/apachekafka/29.png" width="70%" height="70%">
    `
  };


  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  toggleAnswer(question: string) {
    this.selectedQuestion = question;
    this.showAnswer[question] = !this.showAnswer[question];
  }

}