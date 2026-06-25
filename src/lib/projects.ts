// lib/projects.ts
export const projects = [
    {
        title: "QUIC Traffic Classification",
        github: "https://github.com/yahia-abdeldjalil/quic-classifier",
        demo: "https://demo-link.com",
        documentation: "https://docs-link.com",
        image: "/projects/quic.png",

        badge: "Machine Learning",
        sections: {
            overview:
                "Machine learning pipeline designed to classify encrypted QUIC traffic using statistical flow features and evolutionary feature selection.",

            architecture:{
                overview:
                "Packets are collected, transformed into flow statistics, optimized through GA/PSO and classified by ensemble models.",
                
                architectureSteps: [
                    "Packet Capture",
                    "Feature Extraction",
                    "Feature Selection",
                    "Model Training",
                    "Evaluation"
                ]
            },
            challenges: [
                "Encrypted payloads",
                "Class imbalance",
                "Feature engineering"
            ],

            results: [
                "95%+ accuracy",
                "Reduced feature count",
                "Real-time inference"
            ],

            lessons:
                "Feature quality mattered more than model complexity."
        },
        technologies: [
            "Python",
            "Machine Learning",
            "Data Science"
        ],
    },

    {
        title: "5G Core Deployment",
        github: "https://github.com/yahia-abdeldjalil/free5gc-deployment",
        demo: "https://demo-link.com",
        documentation: "https://docs-link.com",
        image: "/projects/free5gc.png",

        badge: "Telecommunications",
        sections: {
            overview:
                "Deployment of a complete 5G core network using Free5GC and UERANSIM, enabling end-to-end connectivity for 5G user equipment.",

            architecture:{
                overview:
                "The architecture consists of UE, gNB, AMF, SMF, UPF, and the data network, all containerized and orchestrated.",
                architectureSteps: [
                    "UE",
                    "gNB",
                    "AMF",
                    "SMF",
                    "UPF",
                    "Data Network"
                ]
            },
            challenges: [
                "Container networking",
                "PDU session failures",
                "DNS configuration",
                "Slice management"
            ],

            results: [
                "Operational 5G laboratory",
                "Successful UE registration",
                "Stable PDU sessions",
                "End-to-end connectivity"
            ],

            lessons:
                "Modern telecom systems increasingly resemble distributed cloud-native architectures."
        },

        technologies: [
            "Free5GC",
            "UERANSIM",
            "Docker",
            "Linux",
            "Networking",
        ],

    },

    {
        title: "Personal AI Assistant",

        github: "https://github.com/yahia-abdeldjalil/personal-ai-assistant",
        demo: "https://demo-link.com",
        documentation: "https://docs-link.com",
        image: "/projects/assistant.png",

        badge: "Artificial Intelligence",
        sections: {
            overview:
                "An autonomous AI assistant that can plan and execute tasks based on natural language input, leveraging LLMs and local execution.",

            architecture:{
                overview:
                "The system consists of a user interface, a planning module, tool integrations, an execution engine, and feedback loops.",
                architectureSteps: [
                    "User Interface",
                    "Planning Module",
                    "Tool Integrations",
                    "Execution Engine",
                    "Feedback Loops"
                ]
            },
            challenges: [
                "Task decomposition",
                "Tool orchestration",
                "Execution reliability",
                "Safety constraints"
            ],

            results: [
                "Automated task execution",
                "Improved productivity",
                "Seamless tool integration"
            ],

            lessons:
                "Agent systems require engineering rigor beyond prompt engineering."
        },
        technologies: [
            "Python",
            "Agents",
            "LLMs",
            "Linux",
            "Automation",
        ],
    },
];