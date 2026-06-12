import json
import os

transcript_path = "/Users/amitbenga/.gemini/antigravity-ide/brain/9c6787e1-b738-430f-9630-8d1bdf99c417/.system_generated/logs/transcript.jsonl"
with open(transcript_path, 'r') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'VIEW_FILE' or data.get('type') == 'RUN_COMMAND':
                content = data.get('content', '')
                if 'EDITORIAL HERO' in content and 'hero-center' in content:
                    print("Found block in step:", data.get('step_index'))
                    print(content[:500])
                    print("...")
        except Exception as e:
            pass
