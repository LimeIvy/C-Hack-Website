'use client';

import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

import type { JSX } from 'react';


const posts = [
  {
    title: 'Matsuribaに参加しました！',
    content: ''
      + '2025年7月4日に行われた「Matsuriba Vol.10」に、Terminalのメンバー数人で参加してきました！\n'
      + '「Matsuriba」は、学生エンジニア同士の交流の機会を生み出すイベントです。Terminalの団体として外部のコミュニティに参加するのはこのイベントが初で、1,2年生には初めて他大学の学生エンジニアと話すという人もいて、最初は話せるか不安がっていました。しかし、同年代が多かったこともあり、次第に打ち解けていくようすが見れました！\n'
      + '「Matsuriba Vol. 10」では、各団体の部長、副部長がそれぞれの内情について話す代表者セッションがあり、各団体の活動について詳しく知ることができました！\n'
      + 'このイベントを通じて、Terminalももっと成長していきたい！ と思いました。これからもサークル活動を頑張っていきます！',
    date: '2025-07-04',
  },
  {
    title: '技育博でCyberAgent賞を受賞しました！',
    content: ''
      + '2025年5月11日に行われた「技育博 vol.2」に、Terminalから1チームが参加し、CyberAgent賞を頂くことができました！\n'
      + '「技育博」とは、全国の学生が制作したアプリケーションやシステムなどを持ち寄り、他の学生やスポンサー企業と交流するイベントです！\n'
      + '今回の技育博では、応募数60上のチームの中から、Terminalの1チーム含む計21チームが参加しました。\n\n'
      + '私たちのチームが出した作品は、2025年3月に愛知工業大学さんのシステム工学研究会というエンジニア団体が主催した「SysHack2025」にて最優秀賞、企業賞を頂いた「MATCHAI」というアプリケーションです。スマホの位置情報とコンパスを用いて、集合場所にGoogle MAP以上に簡単に合流できるアプリです！\n'
      + 'デモサイト：https://www.matchai.site/\n\n'
      + '初めて愛知県以外の学生エンジニアと関わることができ、企業の方にもアプリのUIや使いやすさ等を評価していただき、とても有意義なイベントでした！',
    date: '2025-05-11',
  },
];


export default function Posts(): JSX.Element {
  return (
    <div className="space-y-8 z-50 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-4xl font-bold text-emerald-400 flex items-center">
          <Code className="mr-2 h-8 w-8" />
          投稿一覧
        </h2>
        <div className="h-1 w-20 bg-emerald-400 rounded"></div>
      </motion.div>
      <div className="space-y-16">
        {posts.map((post, index) => {
          return (
            <details key={`post-${index}`}>
              <summary className="cursor-pointer text-2xl font-semibold text-gray-200 hover:text-emerald-400 transition-colors">
                {post.title}
              </summary>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-gray-300 leading-relaxed mt-[10px]"
              >
                <p>
                  {post.content.split('\n').map((line, index_) => {
                    return (
                      <span key={`line-${index_}`}>{line}<br /></span>
                    );
                  })}
                </p>
                <p className="mt-4 text-sm text-gray-500">投稿日: {new Date(post.date).toLocaleDateString()}</p>
              </motion.div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
