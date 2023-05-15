# Scalable and Fault-tolerant Application using Clustering and Load Balancing | Node.js, Cluster

• Implemented a scalable and fault-tolerant Node.js application using clustering, load balancing, and consistent hashing.
• The application consists of a master process and three worker processes, each running on a separate server (3001, 3002,
and 3003)
• Incoming client requests are load balanced using consistent hashing, which distributes the requests evenly across the
servers
• To improve fault tolerance, three virtual nodes are created for each server and kept in a circular ring along with their
hash values
• This approach ensures high availability, fault tolerance, and scalabilit

### Request http://localhost:3001/hello request assigned to http://localhost:3000 through Consistent Hashing

![image](https://github.com/vardhan3236/Clustering-Load-Balancing/assets/126255853/1da8413c-f842-4c34-9b1c-840834c5b754)

### Request http://localhost:3003/xyz request assigned to http://localhost:3000 through Consistent Hashing

![image](https://github.com/vardhan3236/Clustering-Load-Balancing/assets/126255853/d6e356cd-82dd-40ca-a34c-aca1625d7d92)

### Request http://localhost:3002/abc request assigned to http://localhost:3001 through Consistent Hashing
![image](https://github.com/vardhan3236/Clustering-Load-Balancing/assets/126255853/d9015d2e-6e7d-463a-af72-753934c957c8)



