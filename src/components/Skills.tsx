import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const methodologySkills = [
  "Проектирование курсов по модели обратного дизайна",
  "Формулирование учебных целей по таксономии Блума",
  "Выстраивание логики курса под модели обучения",
  "Оценка эффективности по модели Киркпатрика",
  "Применение моделей мотивации и Student Journey Map",
  "Работа с гипотезами по улучшению продукта",
  "Управление линейками курсов и продуктов",
];

const managementSkills = [
  "Анализ конкурентов, рынка, ЦА, custdev",
  "Разработка customer-персон и CJM",
  "Формулирование гипотез для новых продуктов",
  "Разработка концепции и моделей монетизации",
  "Разработка MVP продуктов",
  "Оценка эффективности на основе данных",
  "Планирование и координация задач, контроль исполнения",
];

const tools = [
  "Holst", "Notion", "Tilda", "Figma", "Gamma", "CupCat",
  "ChatGPT", "Perplexity", "Gemini AI", "Claude", "Leonardo", "Recraft",
  "Kanban", "Диаграмма Ганта", "Google Docs", "Jira", "Todoist",
];

const softSkills = [
  { title: "Системное мышление", desc: "Вижу продукт как систему: программа → опыт студента → метрики → продажи → репутация." },
  { title: "Работа с неопределённостью", desc: "Быстро вникаю в неизвестное, принимаю решения, адаптируюсь к изменениям." },
  { title: "Приоритизация", desc: "Выбираю то, что именно сейчас даёт наибольший эффект на результат." },
  { title: "Ответственность", desc: "Важный результат не останется без исполнения — мне важен хороший итог." },
  { title: "Коммуникация", desc: "Спокойная. Нахожу общий язык с людьми, умею давать корректную обратную связь." },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="flex items-end gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-6xl font-display font-black text-gray-100 leading-none">03.</span>
          <h2 className="text-3xl font-display font-bold uppercase tracking-wider mb-1">Навыки</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display font-black text-xl uppercase tracking-wider mb-6 border-b-2 border-primary pb-3">
              Методология
            </h3>
            <ul className="space-y-3">
              {methodologySkills.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1.5 w-2 h-2 shrink-0 bg-primary" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display font-black text-xl uppercase tracking-wider mb-6 border-b-2 border-primary pb-3">
              Менеджмент
            </h3>
            <ul className="space-y-3">
              {managementSkills.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1.5 w-2 h-2 shrink-0 bg-primary" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-display font-black text-xl uppercase tracking-wider mb-6">Инструменты</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((t, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-black text-white text-sm font-medium tracking-wide hover:bg-primary hover:text-black transition-colors duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="font-display font-black text-xl uppercase tracking-wider mb-8">Мягкие навыки</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((s, i) => (
              <div
                key={i}
                className="p-6 border border-gray-200 hover:border-primary transition-colors duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-6 bg-primary group-hover:h-8 transition-all duration-300" />
                  <h4 className="font-display font-bold">{s.title}</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
