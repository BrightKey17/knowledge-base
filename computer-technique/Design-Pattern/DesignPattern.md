# Creational Pattern

## Abstratct Factory

Interface for creating families of related or dependent objets without need to specify their concrete clsses.
``` java

public abstract class AbstractFactory {
   abstract Color getColor(String color);
   abstract Shape getShape(String shape);
}

public class ShapeFactory extends AbstractFactory {
	
   @Override
   public Shape getShape(String shapeType){
   
      if(shapeType == null){
         return null;
      }		
      
      if(shapeType.equalsIgnoreCase("CIRCLE")){
         return new Circle();
         
      } else if(shapeType.equalsIgnoreCase("RECTANGLE")){
         return new Rectangle();
         
      } else if(shapeType.equalsIgnoreCase("SQUARE")){
         return new Square();
      }
      
      return null;
   }
   
   @Override
   Color getColor(String color) {
      return null;
   }
}

public class ColorFactory extends AbstractFactory {
	
   @Override
   public Shape getShape(String shapeType){
      return null;
   }
   
   @Override
   Color getColor(String color) {
   
      if(color == null){
         return null;
      }		
      
      if(color.equalsIgnoreCase("RED")){
         return new Red();
         
      } else if(color.equalsIgnoreCase("GREEN")){
         return new Green();
         
      } else if(color.equalsIgnoreCase("BLUE")){
         return new Blue();
      }
      
      return null;
   }
}
```

## Factory Method

Interface for object creation but let the subclass decide with object to create.

```java
public interface EncryptionAlgorithm {
    public String encrypt(String plaintext);
}

public abstract class Encryptor {
    public void writeToDisk(String plaintext, String filename) {
        EncryptionAlgorithm encryptionAlgorithm = getEncryptionAlgorithm();
        String cyphertext = encryptionAlgorithm.encrypt(plaintext);
        try (FileOutputStream outputStream = new FileOutputStream(filename)) {
            outputStream.write(cyphertext.getBytes());
        } 
        catch (IOException e) {
            e.printStackTrace();
        }
    }
    public abstract EncryptionAlgorithm getEncryptionAlgorithm();
}

public class Sha256CEncryptionAlgorithm implements EncryptionAlgorithm {
    @Override
    public String encrypt(String plaintext) {
        return DigestUtils.sha256Hex(plaintext);
    }
}

public class Sha512EncryptionAlgorithm implements EncryptionAlgorithm {
    @Override
    public String encrypt(String plaintext) {
        return DigestUtils.sha512Hex(plaintext);
    }
}

public class Sha256Encryptor extends Encryptor {
    @Override
    public EncryptionAlgorithm getEncryptionAlgorithm() {
        return new Sha256CEncryptionAlgorithm();
    }
}

public class Sha512Encryptor extends Encryptor {
    @Override
    public EncryptionAlgorithm getEncryptionAlgorithm() {
        return new Sha512EncryptionAlgorithm();
    }
}
```

## Builder

Class with constructors using different field combinations. The Builder-Pattern enables a more readable object creation.

```java
class DataFetcher() {
 // all private fields
  
  public class DataFetcher(String dataType, long limit, String orderBy) {
    // assigned all the private fields
  }
}

class DataFetcherBuilder {
 
  private String dataType;
  private long limit;
  private String orderBy;
  
  public DataFetcherBuilder(String dataType) {
    this.dataType = dataType;
  }
  
  public DataFetcherBuilder limitedBy(long limit) {
    this.limit = limit;
    return this;
  }
  
  public DataFetcherBuilder orderedBy(String orderBy) {
    this.orderBy = orderBy;
    return this;
  }
  
  public DataFetcher create() {
    return new DataFetcher(dataType, limit, orderBy);
  }
}

public class Client() {
  DataFetcher dataFetcher = new DataFetcherBuilder("users").limitedBy(10).orderedBy("username").create();
}
```

## Prototype

Objects are expensive to create and new objects will be similar to existing objects.
```java
public interface Prototype extends Cloneable {
  public AccessControl clone() throws CloneNotSupportedException;
}

public class AccessControl implements Prototype{
  private final String controlLevel;
  private String access;
  
  public AccessControl(String controlLevel,String access){
    this.controlLevel = controlLevel;
    this.access = access;
  }
  
  @Override
  public AccessControl clone(){
    try {
      return (AccessControl) super.clone();
    } catch (CloneNotSupportedException e) {
      e.printStackTrace();
    }
    return null;
  }

  public String getControlLevel(){
    return controlLevel;
  }

  public String getAccess() {
    return access;
  }

  public void setAccess(String access) {
    this.access = access;
  }
}

public class AccessControlProvider {
  private static Map<String, AccessControl>map = new HashMap<String, AccessControl>();

  static{
    map.put("USER", new AccessControl("USER","DO_WORK"));
    map.put("ADMIN", new AccessControl("ADMIN","ADD/REMOVE USERS"));
    map.put("AUDITOR", new AccessControl("ADMIN","READ REPORTS"));
  }

  public static AccessControl getAccessControlObject(String controlLevel){
    AccessControl ac = null;
    ac = map.get(controlLevel);
    if(ac != null) {
      return ac.clone();
    }
    return null;
  }
}
```

## Singleton

instance of an object ensured to be created only once and accessed globally.
```java
class Logger {
  
  private static Logger instance;
  private Logger() {}
  
  public static Logger getInstance() {
    if(instance == null) {
     instance = new Logger(); 
    }
    return instance;
  }
}
```

# Structure Pattern

## Adapter

Interfaces work between two independent or incompatible interfaces. Useful for third party group
```
/*  
* This is our adaptee, a third party implementation of a  
* number sorter that deals with Lists, not arrays. 
*/
public class NumberSorter {   
  public List<Integer> sort(List<Integer> numbers)   {
    //sort and return      
    return new ArrayList<Integer>();   
  }
}

int[] numbers = new int[]{34, 2, 4, 12, 1};
Sorter sorter = new SortListAdapter();      
sorter.sort(numbers);

//this is our Target interface
public interface Sorter {
  public int[] sort(int[] numbers);
}

public class SortListAdapter implements Sorter {
  @Override   
  public int[] sort(int[] numbers) {      
    //convert the array to a List
    List<Integer> numberList = new ArrayList<Integer>();            
    //call the adapter       
    NumberSorter sorter = new NumberSorter();      
    numberList = sorter.sort(numberList);            
    //convert the list back to an array and return             
    return sortedNumbers;   
  }   
}
```

## Bridge

Decouple interfaces from implementations.
```
public interface DrawAPI {
   public void drawCircle(int radius, int x, int y);
}

public class RedCircle implements DrawAPI {
   @Override
   public void drawCircle(int radius, int x, int y) {
      System.out.println("Drawing Circle[ color: red, radius: " + radius + ", x: " + x + ", " + y + "]");
   }
}

public class GreenCircle implements DrawAPI {
   @Override
   public void drawCircle(int radius, int x, int y) {
      System.out.println("Drawing Circle[ color: green, radius: " + radius + ", x: " + x + ", " + y + "]");
   }
}

public abstract class Shape {
   protected DrawAPI drawAPI;
   
   protected Shape(DrawAPI drawAPI){
      this.drawAPI = drawAPI;
   }
   public abstract void draw();	
}

public class Circle extends Shape {
   private int x, y, radius;

   public Circle(int x, int y, int radius, DrawAPI drawAPI) {
      super(drawAPI);
      this.x = x;  
      this.y = y;  
      this.radius = radius;
   }

   public void draw() {
      drawAPI.drawCircle(radius,x,y);
   }
}

public class Client {
   public static void main(String[] args) {
      Shape redCircle = new Circle(100,100, 10, new RedCircle());
      Shape greenCircle = new Circle(100,100, 10, new GreenCircle());

      redCircle.draw();
      greenCircle.draw();
   }
}
```

## Composite

Treat a group of objects the same way as a single object.
```
interface Node {
    long getSize();
}

public class File implements Node {        
    private long size;

    public long getSize() {
        return size;
    }
}

public class Folder implements Node {
    private List<Node> children = new ArrayList<Node>();
    private long size;
  
    public long getSize() {
      long totalSize = this.size;
      for(Node child in children) {
        totalSize += child.getSize();
      }
      return totalSize;
    }
}
```

## Decorator

add functionality to an object at run-time without altering its structure.
```
interface Widget {
    void draw();
}

class TextField implements Widget {
    private int width, height;

    public TextField(int width, int height) {
        this.width = width;
        this.height = height;
    }
    public void draw() {
        System.out.println("TextField: " + width + ", " + height);
    }
}

abstract class Decorator implements Widget {
    // Composition
    private Widget widget;

    public Decorator(Widget widget) {
        this.widget = widget;
    }

    // Delegation
    public void draw() {
        widget.draw();
    }
}

class BorderDecorator extends Decorator {
    public BorderDecorator(Widget widget) {
        super(widget);
    }
    public void draw() {
        // 7. Delegate to base class and add extra stuff
        super.draw();
        System.out.println("  BorderDecorator");
    }
}

class ScrollDecorator extends Decorator {
    public ScrollDecorator(Widget widget) {
        super(widget);
    }
    public void draw() {
        super.draw(); // 7. Delegate to base class and add extra stuff
        System.out.println("  ScrollDecorator");
    }
}

public class Client {
    public static void main(String[] args) {
        // 8. Client has the responsibility to compose desired configurations
        Widget widget = new BorderDecorator(new ScrollDecorator(new TextField(80, 24)));
        widget.draw();
    }
}
```
## Facade

simplifies the interface to an object or a group of objects "behind" this facade.
```
class SocialSharing {
  public void shareUrl(String url) {
    facebookApi.share(url);
    twitterClient.post(url);
    LinkedInClient.createPost(url);
  }
}

class Client {
  // ...
  socialSharing.shareUrl("http://medium.com");
  // ...
}
```

## Flyweight

construct lots of objects from one class

```
public interface LineFlyweight {
  public Color getColor();
  public void draw(Point location);
}

public class Line implements LineFlyweight {
  private Color color; 
  
  public Line(Color c) {
    color = c;
  }
  
  public Color getColor() {
    return color;
  }
  
  public void draw(Point location) {
    // draws
  }
}

public class LineFlyweightFactory {
  private List<LineFlyweight> pool; 
  
  public LineFlyweightFactory() {
    pool = new ArrayList<LineFlyweight>();
  }
  
  public LineFlyweight getLine(Color c) { 
    //check if we've already created a line with this color 
    for(LineFlyweight line: pool) {
      if(line.getColor().equals(c)) {
        return line;
      }
    }
    //if not, create one and save it to the poolLineFlyweight 
    line = new Line(c);
    pool.add(line);
    return line;
  }
}

LineFlyweightFactory factory = new LineFlyweightFactory();
LineFlyweight line = factory.getLine(Color.RED); 
LineFlyweight line2 = factory.getLine(Color.RED); 
// can use the lines independently
line.draw(new Point(100, 100));
line2.draw(new Point(200, 100));
```

## Proxy

contnrol the creation and access of someother object
```
interface Image {
  void display();
}

public class RealImage implements Image {   
  public RealImage(URL url) {
    loadImage(url);   
  }   
  
  public void display() {} 
  
  private void loadImage(URL url)  {
    //do resource intensive operation to load image  
  }
}

public class ProxyImage implements Image {    
  private URL url;     
  public ProxyImage(URL url) {
    this.url = url;    
  }    
  
  public void display() {
    RealImage real = new RealImage(url);
    real.display();    
  }
}
```

# Behavioural Patters

## Chain of Responsibility

a chain of recever objects for a request
```
public abstract class Middleware {
  private Middleware next;

  public Middleware linkWith(Middleware next) {
    this.next = next;
    return next;
  }

  public abstract boolean check(String email, String password);

  protected boolean checkNext(String email, String password) {
    if (next == null) {
        return true;
    }
    return next.check(email, password);
  }
}

public class UserExistsMiddleware extends Middleware {
    public boolean check(String email, String password) {
        if (!UserService.exists(email, password)) {
            return false;
        }
        return checkNext(email, password);
    }
}

public class RoleCheckMiddleware extends Middleware {
    public boolean check(String email, String password) {
        if (email.equals("admin@example.com")) {
            System.out.println("Hello, admin!");
            return true;
        }
        System.out.println("Hello, user!");
        return checkNext(email, password);
    }
}

public class client {

  public static void main(String[] args) throws IOException {        
    Middleware middleware = new UserExistsMiddleware();
    middleware.linkWith(new RoleCheckMiddleware());
    
    boolean canUserLoginAsAdmin = middleware.check("admin@example.com", "S3cret");
  }
}
```

## Mediator

two of more objects need to cooperator
```
interface Mediator {
    void notify(Component sender, String event);
}

class AuthenticationDialog implements Mediator {
    private TitleView title;
    private CheckBox loginOrRegisterChkBx;
    private Field loginUsername;
    private Field loginPassword;
    private Field registrationUsername;
    private Field registrationPassword;
    private Field registrationEmail;
    private Button okBtn;
    private Button cancelBtn;

    constructor AuthenticationDialog()  {}
  
    void notify(Component sender, String event) {
        if (sender == loginOrRegisterChkBx and event == "check")
            if (loginOrRegisterChkBx.checked)
                title = "Log in"
                // 1. Show login form components.
                // 2. Hide registration form components.
            else
                title = "Register"
                // 1. Show registration form components.
                // 2. Hide login form components

        if (sender == okBtn && event == "click")
            if (loginOrRegister.checked)
                // Try to find a user using login credentials.
                if (!found)
                    // Show an errors above login fields.
            else
                // 1. Create the user account using data from
                // the registration fields.
                // 2. Log that user in.
        // ...

class Component {
    private Mediator dialog;

    public Component(Meditor dialog) {
        this.dialog = dialog
    }

    void click() {
        dialog.notify(this, "click")
    }

    void keypress() {
        dialog.notify(this, "keypress")
    }
}

// Concrete components do not talk to each other. They have
// only one communication channel, which is sending
// notifications to the mediator.
class Button extends Component {
    // ...

class Textbox extends Component {
    // ...

class Checkbox extends Component {
    void check() {
        dialog.notify(this, "check")
    }
```

## Memeto

a certain state of an object should be saved
```
public class EditorMemento {
  private final String editorState;
  public EditorMemento(String state) {
    editorState = state;
  }
  public String getSavedState() {
    return editorState;
  }
}

public class Editor { // originator
  public String editorContents; // state
  
  public void setState(String contents) {
    this.editorContents = contents;
  }
  public EditorMemento save() {
    return new EditorMemento(editorContents);
  }
  public void restoreToState(EditorMemento memento) {
    editorContents = memento.getSavedState();
  }
}

class Client {
    public static void main(String[] args) {
        List<EditorMemento> savedStates = new ArrayList<EditorMemento>();
 
        Editor editor = new Editor("");
        editor.setState("Lorem ipsum");
        editor.setState("Lorem");
        savedStates.add(editor.save());
        editor.setState("Lorem ipsum dolor");
        savedStates.add(editor.save());
        editor.setState("Lorem ipsum dolor sit amet");
 
        editor.restoreToState(savedStates.get(1));   
    }
}
```

## Observer

observer objects subscribe to an observable object to be notified
```
interface Observable {
  public void subscribe(Observer observer);
  public void unsubscribe();
}

interface Observer {
  public void update(); 
}

class DataSource implements Observable {
 
  private List<Observer> observers;
  public String data;
  
  public DataSource() {
   this.observers = new ArrayList<Observer>(); 
  }
  
  private void dataSourceHasChanged() {
   for(Observer observer in observers) {
    observer.update(); 
   }
  }
  
  public void addObserver(Observer observer) {
   this.observers.push(observer);
  }
  
  public void removeObserver(Observer observer) {
   this.observers.remove(observer);
  }
  
  public Data fetchData() {
    return this.data;
  }
}

class View implements Observer {
  private DataSource dataSource;
  
  public View() {
    this.dataSource = new DataSource();
  }
  
  public void update() {
    String data = this.dataSource.fetchData();
    // show data
  }
}
```

## State

alter own behaviour when its inter nal state changes
complex conditions define how the objects behave
```
interface State {
 void videoAreaClicked(VideoPlayerView videoPlayerView); 
}

class VideoPlayerView {
  private State currentState;
  
  VideoPlayerView(State initialState) {
    currentState = initialState;
  }
  
  onVideoAreaClicked() {
    currentState.videoAreaClicked(this); 
  }
  
  void setState(State state) {
   currentState = state; 
  }
}

class StopState implements State {
  // ...
  void videoAreaClicked(VideoPlayerView videoPlayerView) {
    videoPlayerView.play();
    videoPlayerView.setState(PlayingState.getInstance());
  }
}

class PlayingState implements State {
  // ...
  void videoAreaClicked(VideoPlayerView videoPlayerView) {
    videoPlayerView.stop();
    videoPlayerView.setState(StopState.getInstance());
  }
}
```

## Strategy

exist multple variants for one algorithm where one variant is chosen to be executed at runtime.
```
interface CompressionStrategy {
  public void compressFiles(List<File> files);
}

class ZipCompressionStrategy implements CompressionStrategy {
  public void compressFiles(List<File> files) {
    // use the ZIP strategy to compress the files
  }
}

class RarCompressionStrategy implements CompressionStrategy {
  public void compressFiles(List<File> files) {
    // use the RAR strategy to compress the files
  }
}

class Compressor {
      private CompressionStrategy strategy;

      public void setCompressionStrategy(CompressionStrategy strategy) {
            this.strategy = strategy;
      }
  
      public void createArchive(ArrayList<File> files) {
            strategy.compressFiles(files);
      }
}
```

## Template

steps of an algorithm or order are defined
```
abstract class DataParser {
  public final void parse() {
    openFile();
    processData();
    closeFile();
    writeData();
    logStatus();
  }
  
  void openFile();
  void processData();
  void closeFile();
  void writeData();
  void logStatus();
}

class CSVParser extends DataParser {
    void openFile() {
       
    }
  
    // ...
}

class XMLParser extends DataParser {
    void openFile() {
       
    }
  
    // ...
}
```

## Visitor

apply one or more operation to a set of objects at run-time
```
interface Visitor {
  public void visit(Roundabout routeElement);
  public void visit(Street routeElement);
}

interface Visitable {
  public void accept(Visitor visitor); 
}

class RouteLengthVisitor implements Visitor {
  long routeLength;
  
  visit(Roundabout routeElement) {
   routeLength += // calculate route length for the roundabout 
  }
  
  visit(Street routeElement) {
   routeLength += // calculate route length for the street
  }
}

class FuelCalculatorVisitor implements Visitor {
  long fuelConsumption;
  
  visit(Roundabout routeElement) {
   fuelConsumption += // calculate fuel consumption the roundabout 
  }
  
  visit(Street routeElement) {
   fuelConsumption += // calculate fuel consumption for the street
  }
}

class NavigationInstructionPrinterVisitor implements Visitor {
  visit(Roundabout routeElement) {
   System.out.println("Leave the roundabout at the " + routeElement.getExit());
  }
  
  visit(Street routeElement) {
   System.out.println("Drive on the " + routeElement.getName() + " for " + routeElement.getLength());
  }
}

class Roundabout implements Visitable { 
  public void accept(Visitor visitor) {
    visitor.visit(this);
  }
}

class Street implements Visitable { 
  public void accept(Visitor visitor) {
    visitor.visit(this);
  }
}
```