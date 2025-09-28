'use client';

import Link from 'next/link';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import Footer from '../../../components/Footer';
import Navigation from '../../../components/Navigation';

export default function BlogPost() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Jane Doe',
      content: 'Great insights! This helped me understand microservices architecture better.',
      date: '2 days ago'
    },
    {
      id: 2,
      author: 'Mike Chen',
      content: 'Thanks for sharing your experience with Kotlin and Spring Boot.',
      date: '1 day ago'
    }
  ]);

  const [newComment, setNewComment] = useState({ author: '', content: '' });

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.author.trim() && newComment.content.trim()) {
      const comment = {
        id: comments.length + 1,
        author: newComment.author,
        content: newComment.content,
        date: 'just now'
      };
      setComments([...comments, comment]);
      setNewComment({ author: '', content: '' });
    }
  };

  // Sample blog post data (in real app, this would come from CMS/database)
  const post = {
    title: 'Building Scalable Microservices with Kotlin',
    date: 'December 15, 2024',
    readTime: '8 min read',
    content: `# Introduction

Microservices architecture has become increasingly popular for building scalable, maintainable applications. In this post, I'll share my experience building microservices using **Kotlin** and **Spring Boot**.

## Why Kotlin for Microservices?

Kotlin offers several advantages for microservices development:

- **Concise syntax** - Less boilerplate code compared to Java
- **Null safety** - Prevents null pointer exceptions at compile time  
- **Coroutines** - Excellent support for asynchronous programming
- **Java interoperability** - Can leverage existing Java libraries

## Setting up the Project

First, let's create a new Spring Boot project with Kotlin:

\`\`\`kotlin
@SpringBootApplication
class MicroserviceApplication

fun main(args: Array<String>) {
    runApplication<MicroserviceApplication>(*args)
}
\`\`\`

## Configuration

Here's a sample application configuration:

\`\`\`yaml
server:
  port: 8080
spring:
  application:
    name: user-service
  datasource:
    url: jdbc:postgresql://localhost:5432/userdb
    username: \${DB_USER:user}
    password: \${DB_PASSWORD:password}
\`\`\`

## Architecture Overview

The following diagram shows how microservices communicate:

![Microservices Architecture](/profile.jpg "Microservices communication flow")

*Note: You can add images using markdown syntax: \`![alt text](/image-path "optional title")\`*

## Best Practices

Here are some key practices I've learned:

1. **Keep services small and focused** - Each service should have a single responsibility
2. **Use event-driven communication** - Implement async messaging with Kafka
3. **Implement proper monitoring** - Use tools like Micrometer and Prometheus
4. **Design for failure** - Implement circuit breakers and retry mechanisms

> **Pro tip**: Always design your microservices with failure in mind. Network calls will fail, services will go down, and databases will become unavailable.

## Performance Considerations

When building microservices, consider:

| Aspect | Recommendation |
|--------|----------------|
| Response Time | < 200ms for critical APIs |
| Throughput | Design for 10x current load |
| Memory | Keep heap usage under 80% |
| CPU | Monitor and alert at 70% usage |

## Conclusion

Kotlin provides an excellent foundation for building microservices. The language's features align well with modern distributed system requirements.

**Resources:**
- [Kotlin Documentation](https://kotlinlang.org/docs/)
- [Spring Boot with Kotlin](https://spring.io/guides/tutorials/spring-boot-kotlin/)
- [Microservices Patterns](https://microservices.io/patterns/)`
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-8">
        
        <div className="pb-8">
          <Navigation />
        </div>

        {/* Post Header */}
        <article className="mb-16">
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-light mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-400 font-mono">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                h1: ({children}) => (
                  <h1 className="text-2xl font-light mt-12 mb-6 first:mt-0 text-black">
                    {children}
                  </h1>
                ),
                h2: ({children}) => (
                  <h2 className="text-xl font-light mt-8 mb-4 text-black">
                    {children}
                  </h2>
                ),
                h3: ({children}) => (
                  <h3 className="text-lg font-light mt-6 mb-3 text-black">
                    {children}
                  </h3>
                ),
                p: ({children}) => (
                  <p className="mb-4 leading-relaxed">
                    {children}
                  </p>
                ),
                ul: ({children}) => (
                  <ul className="mb-4 space-y-2 ml-4">
                    {children}
                  </ul>
                ),
                ol: ({children}) => (
                  <ol className="mb-4 space-y-2 ml-4 list-decimal">
                    {children}
                  </ol>
                ),
                li: ({children}) => (
                  <li className="text-gray-700">
                    {children}
                  </li>
                ),
                code: ({children, ...props}: React.ComponentProps<'code'>) => {
                  const isInline = !props.className;
                  return isInline ? (
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
                      {children}
                    </code>
                  ) : (
                    <code className="block bg-gray-50 p-4 rounded text-sm font-mono overflow-x-auto">
                      {children}
                    </code>
                  );
                },
                pre: ({children}) => (
                  <pre className="bg-gray-50 p-4 rounded text-sm font-mono overflow-x-auto mb-4">
                    {children}
                  </pre>
                ),
                blockquote: ({children}) => (
                  <blockquote className="border-l-4 border-gray-200 pl-4 my-4 italic text-gray-600">
                    {children}
                  </blockquote>
                ),
                table: ({children}) => (
                  <table className="w-full border-collapse border border-gray-200 my-4">
                    {children}
                  </table>
                ),
                th: ({children}) => (
                  <th className="border border-gray-200 px-4 py-2 bg-gray-50 text-left font-medium">
                    {children}
                  </th>
                ),
                td: ({children}) => (
                  <td className="border border-gray-200 px-4 py-2">
                    {children}
                  </td>
                ),
                strong: ({children}) => (
                  <strong className="font-medium text-black">
                    {children}
                  </strong>
                ),
                a: ({href, children}) => (
                  <a 
                    href={href} 
                    className="text-black underline hover:text-gray-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                img: ({src, alt}) => (
                  <div className="my-8 text-center">
                    <picture>
                      <source srcSet={typeof src === 'string' ? src : ''} />
                      <img
                        src={typeof src === 'string' ? src : ''}
                        alt={alt || ''}
                        className="rounded-lg mx-auto max-w-full h-auto"
                        style={{ objectFit: 'contain' }}
                      />
                    </picture>
                    {alt && (
                      <p className="text-sm text-gray-500 mt-2 italic">
                        {alt}
                      </p>
                    )}
                  </div>
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Comments Section */}
        <section className="border-t border-gray-100 pt-12 mb-16">
          <h2 className="text-lg font-medium mb-8 uppercase tracking-wider">Comments ({comments.length})</h2>

          {/* Comment Form */}
          <form onSubmit={handleSubmitComment} className="mb-12">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="your name"
                value={newComment.author}
                onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                className="w-full px-0 py-2 text-sm border-0 border-b border-gray-200 focus:border-gray-400 focus:outline-none bg-transparent"
                required
              />
              <textarea
                placeholder="leave a comment..."
                value={newComment.content}
                onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                className="w-full px-0 py-2 text-sm border-0 border-b border-gray-200 focus:border-gray-400 focus:outline-none resize-none bg-transparent"
                rows={3}
                required
              />
              <button
                type="submit"
                className="text-sm text-gray-400 hover:text-black transition-colors font-mono"
              >
                post comment
              </button>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-8">
            {comments.map((comment) => (
              <div key={comment.id} className="border-b border-gray-50 pb-6 last:border-b-0">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium">{comment.author}</h3>
                  <time className="text-xs text-gray-400 font-mono">{comment.date}</time>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {comment.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Back Link */}
        <div className="pb-8 text-center">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-600 transition-colors font-mono">
            ← back to blog
          </Link>
        </div>

        <Footer />

      </div>
    </div>
  );
}
