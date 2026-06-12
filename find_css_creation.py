import json

transcript_path = "/Users/amitbenga/.gemini/antigravity-ide/brain/9c6787e1-b738-430f-9630-8d1bdf99c417/.system_generated/logs/transcript.jsonl"
with open(transcript_path, 'r') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'PLANNER_RESPONSE' or data.get('type') == 'USER_INPUT':
                continue
            
            content = json.dumps(data)
            if 'EDITORIAL HERO' in content and 'hero-center' in content:
                print(f"Found in step {data.get('step_index')}, type: {data.get('type')}")
                if data.get('type') == 'TOOL_CALL':
                    print("Tool call args:", data.get('args', {}))
                elif data.get('type') == 'TOOL_RESPONSE':
                    # Might be too long to print fully
                    print("Tool response length:", len(str(data.get('content'))))
        except Exception as e:
            pass
