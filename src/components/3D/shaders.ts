// Vertex shader - handles positioning of vertices
export const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vWorldNormal;
  varying vec3 vViewPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

// Fragment shader - handles coloring of pixels
export const fragmentShader = `
  uniform float uTime;
  uniform float uIntensity;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vWorldNormal;
  varying vec3 vViewPosition;
  
  // Metallic color palette
  vec3 colorA = vec3(0.98, 0.90, 0.60);  // Gold
  vec3 colorB = vec3(0.95, 0.85, 0.55);  // Light Gold
  vec3 colorC = vec3(1.00, 0.95, 0.65);  // Bright Gold
  vec3 colorD = vec3(0.92, 0.82, 0.50);  // Deep Gold
  vec3 colorE = vec3(0.97, 0.88, 0.58);  // Rich Gold
  
  // Improved noise function for metallic texture
  float noise(vec2 p) {
    return sin(p.x * 15.0 + uTime * 0.5) * 0.5 + 0.5 +
           cos(p.y * 12.0 + uTime * 0.3) * 0.5 + 0.5;
  }
  
  // Fresnel calculation
  float fresnel(vec3 normal, vec3 viewDir, float power) {
    return pow(1.0 - clamp(dot(normalize(normal), normalize(viewDir)), 0.0, 1.0), power);
  }
  
  void main() {
    // Check if this is the upper surface
    float upFacing = dot(vWorldNormal, vec3(0.0, 1.0, 0.0));
    
    // Enhanced metallic texture
    float noise1 = noise(vUv * 2.0);
    float noise2 = noise(vUv * 3.0 + vec2(uTime * 0.2));
    float finalNoise = (noise1 + noise2) * 0.5;
    
    // Dynamic metallic color mixing
    vec3 metalColor;
    float t = vUv.x + vUv.y + finalNoise;
    
    if (t < 0.2) {
      metalColor = mix(colorA, colorB, t * 5.0);
    } else if (t < 0.4) {
      metalColor = mix(colorB, colorC, (t - 0.2) * 5.0);
    } else if (t < 0.6) {
      metalColor = mix(colorC, colorD, (t - 0.4) * 5.0);
    } else if (t < 0.8) {
      metalColor = mix(colorD, colorE, (t - 0.6) * 5.0);
    } else {
      metalColor = mix(colorE, colorA, (t - 0.8) * 5.0);
    }
    
    // Enhanced metallic reflection
    float fresnelTerm = fresnel(vNormal, vViewPosition, 4.0);
    metalColor += vec3(0.3) * fresnelTerm;
    
    // Metallic shine effect
    float shine = pow(max(0.0, dot(normalize(vViewPosition), reflect(vec3(0.0, 0.0, -1.0), vNormal))), 32.0);
    metalColor += vec3(0.5) * shine;
    
    // Edge highlighting
    float edge = 1.0 - abs(dot(vNormal, normalize(vViewPosition)));
    edge = pow(edge, 3.0);
    
    // Make upper surface black with metallic reflection
    if (upFacing > 0.7) {
      metalColor = vec3(0.02) + vec3(0.05) * fresnelTerm + vec3(0.1) * shine;
    }
    
    // Dynamic alpha for better depth perception
    float alpha = (edge * 0.6 + fresnelTerm * 0.4) * uIntensity;
    alpha = clamp(alpha, 0.1, 1.0);
    
    gl_FragColor = vec4(metalColor, alpha);
  }
`;