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


    threads: `

    A thread is a lightweight sub-process, the smallest unit of processing. 
    Multiprocessing and multithreading, both are used 
    to achieve multitasking.
    
    2threads are waiting eachother is caled deadlock..
    means all arein waiting state.
    
    t1.join.t2 because t1 is waiting upto t2 is completed.
    
    if you are use join current thread is used join method.up to main method will wait.
    
    private Thread t1=null;
    
    private thread t2 =null;
    
    t1.join(t2);
    
    diff of wait and sleep
    
    wait(1000)ani aunte notify method thread ni wait cheyanivadu
    
    sleep(1000)ani aunte thread executes will come after 1000 seconds after.because it having lock
    
    yield:: it comes back to runnable state
    
    A thread is a lightweight sub-process, the smallest unit of processing. 
    Multiprocessing and multithreading, both are used to achieve multitasking.
    
    However, we use multithreading than multiprocessing because threads use a shared memory area. 
    They don't allocate separate memory area so saves memory, and context-
    
    switching between the threads takes less time than process.
    
    
    
    upendra sir says
    
    thread anagane oka job .job having no.of statements.
    
    th = new OurThread()
    
    th.start();//it calls run method.//also known as thread creation.
    
    2 ways to create thread .
    
    1. extends thread
    
    2.runnable interface
    
    class Multi extends Thread{
    
    public void run(){
    
    System.out.println("thread is running...");
    
    }
    
    public static void main(String args[]){
    
    Multi t1=new Multi();
    
    t1.start();
    
    }
    
    }
    
    2) Java Thread Example by implementing Runnable interface
    
    class Multi3 implements Runnable{
    
    public void run(){
    
    System.out.println("thread is running...");
    
    }
    
    public static void main(String args[]){
    
    Multi3 m1=new Multi3();
    
    Thread t1 =new Thread(m1);
    
    t1.start();
    
    }
    
    }
    
    synchronization in threads::
    
    public class Person{
    
    public synchronized void test1(){
    
    }
    
    }
    
    public class mainTest{
    
    Thread1 t1 = new Thread(new Person());
    
    Thread1 t2 = new Thread(new Person());
    
    t1.start();
    
    }
    
    ee time lo delay chesina apudu interrrupted exception vastundi.
    
    
    
    extends aunte adi oka thread extends ee posible..vere class ni extend cheyalemu.
    
    ade runnable lo ayithe another clas ni kuda extends thread cheya vachu.
    
    ee thread Thread.currentthread.getname()//ee thread exe chestundo cheptundi.
    
    public class
    
    integer endTime = System.currentmilliseconds
    
    integer starttime= System.currentmilliseconds
    
    syso(starttime-endtime)
    
    threadpool means some threads are exist in queue
    
    callable = new Threadcallabe();
    
    we need to mention size is like new fixed threadpool(2)
    
    ExecutorService es = new fixed threadpool(2)
    
    es.submit(callable);
    
    2 thread types
    
    1.sequential execution 2.parallel execution
    
    1.sequential execution
    
    main(){
    
    for(int i=1;i<1000;i++){}//first it execute next below for is executing so is called sequential flow.
    
    for(int i=1;i<1000;i++){}
    
    job means its having statements execution by thread
    
    paralel threads are means threads are executing statements paralley(means one into another)
    
    }
    
    
    
    ref :: https://www.javatpoint.com/java-executorservice
    
    Java ExecutorService by upendra sir::
    
    data return from thread to thread
    
    so all threads data to main method.
    
    callable data return chestundi to threads.
    
    public class ThreadCallable implements Callable Integer> {
    
    public Integer call(){
    
    Thread.sleep(2000);
    
    return 200;
    
    }
    
    }
    
    classMain{
    
    ThreadCallable callable = new ThreadCallable();
    
    Thread th new Thread(callable)//it does not work.
    
    ExecutorService es = Executor.newFixedhreadPool(2);
    
    Fututurefi = es.submit(callable);
    
    try{
    
    Integer data1 = fi.get();
    
    }
    
    catch(Exception e){
    
    e.printStacktrace();
    
    }
    
    }
    
    long starTime =syste.currenttimemillseconds;
    
    long endTime =syste.currenttimemillseconds
    
    syso(endtime-starttime);
    
    ExecutorService having threadpools.so its having multiple threads.
    
    
    
    The Java ExecutorService is the interface which allows us to execute tasks on threads asynchronously.
     The Java ExecutorService interface is present in the
    
    java.util.concurrent package. The ExecutorService helps in maintaining a pool of threads and 
    assigns them tasks. It also provides the facility to queue up tasks until
    
    there is a free thread available if the number of tasks is more than the threads available.
    
    1.2. Callable and Future
    
    Another important advantage of the Executor framework was the Callable interface. 
    It’s similar to the Runnable interface with two benefits:
    
    It’s call() method returns a result after the thread execution is complete.
    
    When we send a Callable object to an executor, we get a Future object’s reference. 
    We can use this object to query the status of thread and the result of the Callable
    
    object.
    
    A simple program of Java ExecutorService
    
    public class ExecutorServiceExample {
    
    public static void main(String[] args) {
    
    ExecutorService executorService = Executors.newFixedThreadPool(10);
    
    executorService.execute(new Runnable() {
    
    @Override
    
    public void run() {
    
    System.out.println("ExecutorService");
    
    }
    
    });
    
    executorService.shutdown();
    
    }
    
    }
    
    
    
    2.1. Executors class
    
    Executors is a utility class that provides factory methods for creating the 
    implementations of the interface.
    
    //Executes only one thread
    
    ExecutorService es = Executors.newSingleThreadExecutor();
    
    //Internally manages thread pool of 2 threads
    
    ExecutorService es = Executors.newFixedThreadPool(2);
    
    //Internally manages thread pool of 10 threads to run scheduled tasks
    
    ExecutorService es = Executors.newScheduledThreadPool(10);
    
    
    
    Assigning tasks to ExecutorServices
    
    To assign a task to ExecutorService, we can use the following methods-
    
    execute(Runnable task)
    
    submit(Runnable task) / submit(Callable task)
    
    invokeAny(Collection> tasks)
    
    invokeAll(Collection> tasks)
    
    public class ExecutorServiceExample {
    
    public static void main(String[] args) {
    
    ExecutorService executorService = Executors.newSingleThreadExecutor();
    
    executorService.submit(new Runnable() {
    
    @Override
    
    public void run() {
    
    System.out.println("ExecutorService");
    
    }
    
    });
    
    }
    
    }
    
    
    
    public class ExecutorServiceExample {
    
    public static void main(String[] args) throws InterruptedException, ExecutionException {
    
    ExecutorService executorService = Executors.newSingleThreadExecutor();
    
    Set> callables = new HashSet>();
    
    callables.add(new Callable() {
    
    public String call() throws Exception {
    
    return "Task 1";
    
    }
    
    });
    
    callables.add(new Callable() {
    
    public String call() throws Exception {
    
    return "Task 2";
    
    }
    
    });
    
    callables.add(new Callable() {
    
    public String call() throws Exception {
    
    return "Task 3";
    
    }
    
    });
    
    java.util.List> futures = executorService.invokeAll(callables);
    
    for(Future future : futures){
    
    System.out.println("future.get = " + future.get());
    
    }
    
    executorService.shutdown();
    
    }
    
    }
    
    Output:
    
    future.get = Task 1
    
    future.get = Task 3
    
    future.get = Task 2
    
    
    
    example 2 ::
    
    ExecutorService Runnable Example
    
    import java.time.LocalDateTime;
    
    import java.util.concurrent.ExecutionException;
    
    import java.util.concurrent.ExecutorService;
    
    import java.util.concurrent.Executors;
    
    import java.util.concurrent.Future;
    
    import java.util.concurrent.TimeUnit;
    
    public class Main
    
    {
    
    public static void main(String[] args)
    
    {
    
    //Demo task
    
    Runnable runnableTask = () -> {
    
    try {
    
    TimeUnit.MILLISECONDS.sleep(1000);
    
    System.out.println("Current time :: " + LocalDateTime.now());
    
    } catch (InterruptedException e) {
    
    e.printStackTrace();
    
    }
    
    };
    
    //Executor service instance
    
    ExecutorService executor = Executors.newFixedThreadPool(10);
    
    //1. execute task using execute() method
    
    executor.execute(runnableTask);
    
    //2. execute task using submit() method
    
    Future result = executor.submit(runnableTask, "DONE");
    
    while(result.isDone() == false)
    
    {
    
    try
    
    {
    
    System.out.println("The method return value : " + result.get());
    
    break;
    
    }
    
    catch (InterruptedException | ExecutionException e)
    
    {
    
    e.printStackTrace();
    
    }
    
    //Sleep for 1 second
    
    try {
    
    Thread.sleep(1000L);
    
    } catch (InterruptedException e) {
    
    e.printStackTrace();
    
    }
    
    }
    
    //Shut down the executor service
    
    executor.shutdownNow();
    
    }
    
    }
    
    Program output.
    
    Console
    
    Current time :: 2019-05-21T17:52:53.274
    
    Current time :: 2019-05-21T17:52:53.274
    
    The method return value : DONE
    
    
    
    Threadlifecycle
    
    interviewr asked how to come thread from running to runnable::
    
    ans :: is t.start()//it calls to run ()method.then only it comes from running to runnable.
    
    start() run() wait();
    
    yield()<- sleep()
    
    new ------>runnable------>running------->waiting--------->dead
    
    yield()-->currently running thread is forcebly excuted.remain are wait
    
    sleep()-->pause the thread and it held lock with pause
    
    daemon->running contineusly.it run in background only.
    
    notify ,notify all--->suddenly came to runnable stage.
    
    t1.join.t2 because t1 is waiting upto t2 is completed.
    
    if you are use join current thread is used join method.up to main method will wait.
    
    private Thread t1=null;
    
    private thread t2 =null;
    
    t1.join(t2);
    
    
    
    diff of wait and sleep
    
    wait(1000)ani aunte notify method thread ni wait cheyanivadu
    
    sleep(1000)ani aunte thread executes will come after 1000 seconds after.because it having lock
    
    yield:: it comes back to runnable state
    
    2threads are waiting eachother is caled deadlock..means all are in waiting state.
    
    
    
    hread class methods(7)::
    
    String getName();
    
    void start();
    
    void run();
    
    void sleep(int sleeptime);
    
    void yield();
    
    void join();
    
    boolean isAlive();
    
    Exception class Methods(6)::
    
    public String getMessage()
    
    public Throwable getCause()
    
    public String toString()
    
    public void printStackTrace()
    
    public StackTraceElement[]getStackTrace()
    
    public Throwable fillInStackTracae()
    ~~~~~~~~~~~~~~~~~~~~~~
    Q)about executors?
    
    A)fetch from readword.html file
    
    ~~~~~~~~~~~~~~~

    Q)Thread creation and calling
    <img src="assets/images/startingthreads.png" width="70%" height="70%">

    Executing parallelly 2 threads shown below:
    package com.threads;
    
    import java.util.concurrent.TimeUnit;
    
    public class FourthTechnique {
    
      public static void main(String[] args) {
        System.out.println("main thread starts here...");
        new ThirdTask();//new change on here
        new ThirdTask();//new change on here
          System.out.println("main thread end here..");
    
      }
    }
    class ThirdTask implements Runnable {//new change on here
      private static int count=0;
      private int id;
      @Override
      public void run() {
        for (int i = 10; i >= 5; i--) {
          System.out.println(id + "-->" +"TICK TOK:: " + i);
          try {
            TimeUnit.MILLISECONDS.sleep(1250);
          } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
          }
        }
      }
    
      public ThirdTask() {
        this.id=++count;
        new Thread(this).start();//new change on here
      }
    
    }
    
    //o/p:
    
    //main thread starts here...
    //main thread end here..
    //2-->TICK TOK:: 10
    //1-->TICK TOK:: 10
    //1-->TICK TOK:: 9
    //2-->TICK TOK:: 9
    //1-->TICK TOK:: 8
    //2-->TICK TOK:: 8
    //2-->TICK TOK:: 7
    //1-->TICK TOK:: 7
    //1-->TICK TOK:: 6
    //2-->TICK TOK:: 6
    //1-->TICK TOK:: 5
    //2-->TICK TOK:: 5
    
    Annanymous example in threads:
    
    package com.threads;
    
    import java.util.concurrent.TimeUnit;
    
    public class FifthTechnique {
    
      public static void main(String[] args) {
        
            System.out.println("main thread starts here...");
        new Thread(new Runnable() {
          @Override
          public void run() {
            for (int i = 10; i >=5; i--) {
            System.out.println("TICK TOCK::"+i);	
            }
            
            try {
              TimeUnit.MILLISECONDS.sleep(1299);
            } catch (InterruptedException e) {
              e.printStackTrace();
            }
          }
        }).start();
          System.out.println("main thread end here..");
    
      }
    }
    
    
    //o/p:
    
    //main thread starts here...
    //main thread end here..
    //TICK TOCK::10
    //TICK TOCK::9
    //TICK TOCK::8
    //TICK TOCK::7
    //TICK TOCK::6
    //TICK TOCK::5
    `,
    executors: `
    <img src="assets/images/executors.png" width="70%" height="70%">
    <img src="assets/images/exec1.png" width="70%" height="70%">
    <img src="assets/images/exec2.png" width="70%" height="70%">
    <img src="assets/images/exec3.png" width="70%" height="70%">
    <img src="assets/images/exec4.png" width="70%" height="70%">
    there are 3 types
    Executors.newFixedThreadPool(1); 
    Executors.newCachedThreadPool(); no need to mention size .it gives o/p like fixed theradpool
    Executors.newSingleThreadExecutor(); works like synchronization
    package com.threads;
    import java.util.concurrent.ExecutorService;
    import java.util.concurrent.Executors;
    import java.util.concurrent.TimeUnit;
    public class UsingFixedThreadPool {
    
      public static void main(String[] args) {
        System.out.println("main thread start here...");
    
        ExecutorService executorService = Executors.newCachedThreadPool();
        for (int i = 0; i < 2; i++) {
          executorService.submit(new LoopTask());
    
        }
        executorService.shutdown();
        System.out.println("main thread end here...");
      }
    }
    class LoopTask implements Runnable {
      private static int count=0;
      private int id;
      LoopTask() {
        this.id = ++count;
      }
      @Override
      public void run() {
        System.out.println("TASK #### " + id + " ### STARTED");
        for (int i = 10; i >= 5; i--) {
          System.out.println("TICK TOCK::" + i);
        }
        try {
          TimeUnit.MILLISECONDS.sleep(5000);
        } catch (InterruptedException e) {
          e.printStackTrace();
        }
        System.out.println("TASK #### " + id + " ### ENDED");
    
      }
    }
    Output:
    
    main thread start here...
    main thread end here...
    TASK #### 2 ### STARTED
    TICK TOCK::10
    TASK #### 1 ### STARTED
    TICK TOCK::9
    TICK TOCK::8
    TICK TOCK::7
    TICK TOCK::6
    TICK TOCK::5
    TICK TOCK::10
    TICK TOCK::9
    TICK TOCK::8
    TICK TOCK::7
    TICK TOCK::6
    TICK TOCK::5
    TASK #### 2 ### ENDED
    TASK #### 1 ### ENDED
    `,
    aws: ` 
    AWS services:
    IAM – user credentials and roles
    EC2 – virtual machine like vmware through ssh we connect.
              We hosting and storage also on here
    Route 53. maintain the DNS info 
    S3 – its bucket to store files its like google drive
    RDS – it’s a db of aws
    Lambda
    
    VPC – networking (all ip address and gateways are mapped here)
    
    Aws-architecture:
    <img src="assets/images/aws/aws1.jpg" width="70%" height="70%">
    
AWS API gateway: choose restapi to handle api
In inside login aws and search api gateway click on create api below 4 tabs appear.

    <img src="assets/images/aws/aws2.png" width="70%" height="70%">
    For documentation ref: restapi json like this.
https://docs.aws.amazon.com/apigateway/

    <img src="assets/images/aws/aws3.png" width="70%" height="70%">
    choose click on example api and import its created the pets api and that api has below options
    <img src="assets/images/aws/aws4.png" width="70%" height="70%">
    After created api shown below ss
    <img src="assets/images/aws/aws5.png" width="70%" height="70%">
    Request validation in API Gateway

You can configure API Gateway to perform basic validation of an API request before proceeding
 with the integration request. When validation fails, API Gateway immediately fails the request, 
 returns a 400 error response to the caller, and publishes the validation results in the CloudWatch Logs.
This enables you, the API developer, to focus on app-specific validation in the backend. 
For the basic validation, API Gateway verifies either or both of the following conditions:
•	The required request parameters in the URI, query string and headers of
 an incoming request are included and non-blank.
•	The applicable request payload adheres to the configured JSON schema request model of the method.

    <img src="assets/images/aws/aws6.png" width="70%" height="70%">
    Click on method request shown on below ss
    <img src="assets/images/aws/aws7.png" width="70%" height="70%">
    IAM : Identity and Access Managenent : its having Json doc
    <img src="assets/images/aws/aws8.png" width="70%" height="70%">
    Create the user:
    <img src="assets/images/aws/aws9.png" width="70%" height="70%">
    Select I want to create an IAM user click on next then select the user group
    <img src="assets/images/aws/aws10.png" width="70%" height="70%">
    IAM policies structure: focus on principle in below json
    <img src="assets/images/aws/aws11.png" width="70%" height="70%">
    User not having pemissions
    <img src="assets/images/aws/aws12.png" width="70%" height="70%">
    Choose IAMreadOnlyAccess and submit
    <img src="assets/images/aws/aws13.png" width="70%" height="70%">
    About EC2:
    <img src="assets/images/aws/ec2.png" width="70%" height="70%">
    <img src="assets/images/aws/ec2-1.png" width="70%" height="70%">

    <img src="assets/images/aws/aws14.png" width="70%" height="70%">
    <img src="assets/images/aws/aws15.png" width="70%" height="70%">
    How to connect Ec2 instance give username and connect
    <img src="assets/images/aws/aws16.png" width="70%" height="70%">
    After click on connect its shows cmd like below ->whomami
    <img src="assets/images/aws/aws17.png" width="70%" height="70%">
    Get user give cmd like this  aws iam list-users
    <img src="assets/images/aws/aws18.png" width="70%" height="70%">
    <img src="assets/images/aws/aws19.png" width="70%" height="70%">
    About Amazon Route 53 -> maintain the DNS info on here
    <img src="assets/images/aws/aws20.png" width="70%" height="70%">
    About S3 uses for storage and hosting like that.
    <img src="assets/images/aws/aws21.png" width="70%" height="70%">
    <img src="assets/images/aws/aws22.png" width="70%" height="70%">
    Paths are like this 
    <img src="assets/images/aws/aws23.png" width="70%" height="70%">
    About S3 uses for storage and hosting like that.
    <img src="assets/images/aws/aws24.png" width="70%" height="70%">
    Paths are like this 
    <img src="assets/images/aws/aws25.png" width="70%" height="70%">
    Create bucket :
    <img src="assets/images/aws/aws26.png" width="70%" height="70%">
    <img src="assets/images/aws/aws27.png" width="70%" height="70%">
    Choose options and click on create bucket button.
Bucket created like this 

    <img src="assets/images/aws/aws28.png" width="70%" height="70%">
    Click on stephane-demo-s3(its bucketname)shown like this
    <img src="assets/images/aws/aws29.png" width="70%" height="70%">
    Upload any file like coffee.jpg
    <img src="assets/images/aws/aws30.png" width="70%" height="70%">
    Click on coffee.jpg its exist in Object under
    <img src="assets/images/aws/aws31.png" width="70%" height="70%">
    Coffee properties like this.
    <img src="assets/images/aws/aws32.png" width="70%" height="70%">
    Through cmd prompts to connect S3 bucket.
    <img src="assets/images/aws/aws33.png" width="70%" height="70%">
    About VPC (virtual private cloud) : allocation ip addresses
    <img src="assets/images/aws/aws34.png" width="70%" height="70%">
    <img src="assets/images/aws/aws35.png" width="70%" height="70%">
    Search in console of aws
    <img src="assets/images/aws/aws36.png" width="70%" height="70%">
    Click on VPC .already created like this
    <img src="assets/images/aws/aws37.png" width="70%" height="70%">
    see the traffic shown like this.
    <img src="assets/images/aws/aws38.png" width="70%" height="70%">
    About Lambda:
Its like main() method .but its have handler() method.

    <img src="assets/images/aws/aws39.png" width="70%" height="70%">
    Click on Lambda. Its showing below page.
    <img src="assets/images/aws/aws40.png" width="70%" height="70%">
    Click on create function
    <img src="assets/images/aws/aws41.png" width="70%" height="70%">
    Choose from scratch option and give basicinformation
    <img src="assets/images/aws/aws42.png" width="70%" height="70%">
    Click on create function.check index.js file

    `,
    kubernates:`
    https://docs.docker.com/desktop/kubernetes/
    <img src="assets/images/kubernates/k8architec.png" width="70%" height="70%">
    For deploy and access the kubernates dashboard.
    https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/
    how to work with azure kubernates shown below.
    Azure kubernates services(AKS)-search aks
    https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-portal?tabs=azure-cli
    https://tm.udemy.com/course/learn-kubernetes/learn/lecture/21126626#overview
    check the services and deployments of newly created services
    <img src="assets/images/kubernates/azureportalui.png" width="70%" height="70%">
    After click on kubernates services mouse over we can create a kubernates cluster.
<img src="assets/images/kubernates/createcluster.png" width="70%" height="70%">
To check cluster newly created node.


<img src="assets/images/kubernates/checknewnode.png" width="70%" height="70%">
Lets create services and deploy
<img src="assets/images/kubernates/deploy.png" width="70%" height="70%">
Checking services-using command kubectl get deployments,svc
<img src="assets/images/kubernates/svc.png" width="70%" height="70%">


Above ss  external-ip column is the loadbalancing and ready column is the howmany containers hold.
 After click cluster ip in browser 

 <img src="assets/images/kubernates/output.png" width="50%" height="50%">

 Few commands we are learning now on the below:
 For help we use below command
 <img src="assets/images/kubernates/c.png" width="50%" height="50%">
 <img src="assets/images/kubernates/1.png" width="50%" height="50%">
 <img src="assets/images/kubernates/2.png" width="50%" height="50%">
 <img src="assets/images/kubernates/3.png" width="50%" height="50%">
 <img src="assets/images/kubernates/4.png" width="50%" height="50%">
 <img src="assets/images/kubernates/5.png" width="50%" height="50%">
 <img src="assets/images/kubernates/6.png" width="50%" height="50%">
 <img src="assets/images/kubernates/7.png" width="50%" height="50%">
 Another way to check pods is existing on which node
 <img src="assets/images/kubernates/8.png" width="50%" height="50%">
 <img src="assets/images/kubernates/9.png" width="50%" height="50%">

 Answer is 2 for above
 Describe command shows howmany nodes is connected
 <img src="assets/images/kubernates/10.png" width="50%" height="50%">
 <img src="assets/images/kubernates/11.png" width="50%" height="50%">
 <img src="assets/images/kubernates/12.png" width="50%" height="50%">
 <img src="assets/images/kubernates/13.png" width="50%" height="50%">
 <img src="assets/images/kubernates/14.png" width="50%" height="50%">
 <img src="assets/images/kubernates/15.png" width="50%" height="50%">
 When we give below command its deployed yaml to kubernates
 <img src="assets/images/kubernates/16.png" width="50%" height="50%">
 Using cat command we read yaml file
 <img src="assets/images/kubernates/17.png" width="50%" height="50%">
 <img src="assets/images/kubernates/18.png" width="50%" height="50%">
 <img src="assets/images/kubernates/19.png" width="50%" height="50%">
 2 ways to change 
 1.edit the file 
 2.
 <img src="assets/images/kubernates/20.png" width="50%" height="50%">
<img src="assets/images/kubernates/21.png" width="50%" height="50%">
<img src="assets/images/kubernates/22.png" width="50%" height="50%">
Then change image: redis123 to redis just using backspace
After change image name then we need to apply cmd used
<img src="assets/images/kubernates/23.png" width="50%" height="50%">
Now checking pods: 
<img src="assets/images/kubernates/24.png" width="50%" height="50%">
Working with yaml files in eclipse:
https://tm.udemy.com/course/learn-kubernetes/learn/lecture/9752888#overview
<img src="assets/images/kubernates/25.png" width="50%" height="50%">
<img src="assets/images/kubernates/26.png" width="50%" height="50%">
Below is the give application url to see in browser
<img src="assets/images/kubernates/27.png" width="50%" height="50%">
To check pods and services we use below cmd
<img src="assets/images/kubernates/28.png" width="50%" height="50%">
`,
    docker:`
    about docker :
maven project lo Dockerfile(same name ..no extention name like .txt like) tho create cheyali.
Dockerfile  ee file lo below info add cheyali. So manaproject jar images laga convert chesukoni docker lo vunna images anna folder lo pedthundi.
FROM openjdk:17-jdk-slim
MAINTAINER eazybytes.com
COPY target/accounts-snapshot.jar 
ENTRYPOINT["java","-jar","account-snapshot.jar"]
<img src="assets/images/docker/1.png" width="70%" height="70%">

execute the below command:
docker build . -t dockersigninusername/accounts:s4
docker images --> this command shows all images in docker.
=============================
Docker inspect giveimageid name then its shows the details of image
Move local image to docker repository we use below command
<img src="assets/images/docker/2.png" width="70%" height="70%">

Here s4  s4 anedi lable name(tagname) of image stored in images folder in docker tool.
    
    
<img src="assets/images/docker/3.png" width="70%" height="70%">

<img src="assets/images/docker/4.png" width="70%" height="70%">

    
    
    
    
    
    `,
    apachekafka:`
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
    `,
    java11:`
Some of the important Java 11 features are:

Running Java File with single command
New utility methods in String class
Local-Variable Syntax for Lambda Parameters
Nested Based Access Control
JEP 321: HTTP Client
Reading/Writing Strings to and from the Files
JEP 328: Flight Recorder

=======================================
Running Java File with single command :

One major change is that you don’t need to compile the java source file with javac tool first. 
You can directly run the file with java command and it implicitly compiles. 
==========================================

New utility methods in String class:

isBlank() - This instance method returns a boolean value. Empty Strings and Strings with only white spaces are treated as blank.

System.out.println(" ".isBlank()); //true      
        String s = "Anupam";
        System.out.println(s.isBlank()); //false
        String s1 = "";
        System.out.println(s1.isBlank()); //true

lines() :

 String str = "JD\nJD\nJD"; 
        System.out.println(str);
        System.out.println(str.lines().collect(Collectors.toList()));


strip(), stripLeading(), stripTrailing() strip() - Removes the white space from both, beginning and the end of string.

But we already have trim(). Then what’s the need of strip()? strip() is “Unicode-aware” evolution of trim(). 
When trim() was introduced, Unicode wasn’t evolved

 String str = "=".repeat(2);
        System.out.println(str); //prints ==
=========================================
Local-Variable Syntax for Lambda Parameters::


about functional interface in old way:

@FunctionalInterface
interface MyFunctionalInterface {
    void myMethod(String s);
}

public class Main {
    public static void main(String[] args) {
        // Using a lambda expression to implement the single abstract method
        MyFunctionalInterface functionalInterface = (s) -> System.out.println(s.toUpperCase());

        // Invoking the method defined in the functional interface
        functionalInterface.myMethod("hello");
    }
}


Local Variable syntax  for Lambda Parameters example:


import java.util.function.Consumer;

public class Main {
    public static void main(String[] args) {
        // Old way
        Consumer<String> oldConsumer = (String s) -> {
            System.out.println(s.toUpperCase());
        };
        oldConsumer.accept("hello");

        // Using var with lambda parameters (Java 11+)
        Consumer<String> newConsumer = (var s) -> {
            System.out.println(s.toUpperCase());
        };
        newConsumer.accept("world");
    }
}

rules to apply:

(var s1, s2) -> s1 + s2 //no skipping allowed
(var s1, String y) -> s1 + y //no mixing allowed

var s1 -> s1 //not allowed. Need parentheses if you use var in lambda.
===============================================
4.4) Nested Based Access Control
public class Main {
 
    public void myPublic() {
    }
 
    private void myPrivate() {
    }
 
    class Nested {
 
        public void nestedPublic() {
            myPrivate();
        }
    }
}

Method method = ob.getClass().getDeclaredMethod("myPrivate");
method.invoke(ob);
=============================================

4.5) Dynamic Class-File Constants:

Dynamic Class-File Constants, introduced in Java 11,
 is a feature that extends the constant pool of class files to support dynamic constants. 
These dynamic constants are constants whose values are not known at compile time but are resolved at runtime.

Purpose: Before Java 11, the constant pool in class files could only contain static constants whose values were known at compile time. 
Dynamic Class-File Constants allow Java to support dynamic constants, where the value is determined at runtime.

Dynamic Values: Dynamic constants can be initialized using dynamic expressions, 
including method invocations and field accesses. These expressions are resolved at runtime when the class is initialized.

Syntax: Dynamic constants are defined using the dynamic keyword followed by an expression inside the constant pool.

public class MyClass {
    static final String CONSTANT_STRING = "Hello";
    static final int CONSTANT_INT = 42;

    // Dynamic constants introduced in Java 11
    static final String DYNAMIC_STRING = dynamicMethod();
    static final int DYNAMIC_INT = CONSTANT_INT * 2;

    private static String dynamicMethod() {
        return "Dynamic Value";
    }
}

=======================================
Epsilon: A No-Op Garbage Collector
Unlike the JVM GC which is responsible for allocating memory and releasing it, Epsilon only allocates memory. It allocates memory for the following things:

Performance testing.
Memory pressure testing.
VM interface testing.
Extremely short lived jobs.
Last-drop latency improvements.
Last-drop throughput improvements.


The primary purpose of Epsilon is to serve as a diagnostic tool for performance testing, benchmarking, and troubleshooting. 
By disabling garbage collection, developers can focus exclusively on other aspects of their application's performance, 
such as throughput, latency, and memory footprint, without the interference of garbage collection pauses.

To enable Epsilon, you can use the following JVM option:

-XX:+UseEpsilonGC

======================================

HttpClient:

The main feature introduced by this JEP was the HttpClient class. 
It provided a more modern and flexible API for making HTTP requests and handling responses

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Main {
    public static void main(String[] args) throws Exception {
        // Create an HttpClient
        HttpClient client = HttpClient.newHttpClient();

        // Create an HttpRequest
        HttpRequest request = HttpRequest.newBuilder()
                .uri(new URI("https://jsonplaceholder.typicode.com/posts/1"))
                .GET()
                .build();

        // Send the request and get the response
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        // Print the response body
        System.out.println("Response Body:");
        System.out.println(response.body());
    }
}

===========================================

Java Flight Recorder (JFR): 
Java Flight Recorder is a profiling and event collection framework that has been available as a commercial feature in Oracle JDK for several releases. 
It allows developers to collect detailed information about the JVM and the running application with minimal overhead.

================================

Reading/Writing Strings to and from the Files :
Java 11 strives to make reading and writing of String convenient. It has introduced the following methods for reading and writing to/from the files:

readString()
writeString()

Path path = Files.writeString(Files.createTempFile("test", ".txt"), "This was posted on JD");
System.out.println(path);
String s = Files.readString(path);
System.out.println(s); //This was posted on JD

=============================























    
    `,
    springbatch:`inprogress`,
  };
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  toggleAnswer(question: string) {
    this.selectedQuestion = question;
    this.showAnswer[question] = !this.showAnswer[question];
  }
  
}